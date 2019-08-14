using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpotifyAPI.Web;
using SpotifyAPI.Web.Auth;
using SpotifyAPI.Web.Enums;
using SpotifyAPI.Web.Models;
using WeddingMusic.API.Data;
using WeddingMusic.API.Helpers;
using WeddingMusic.API.Models;

namespace WeddingMusic.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongsController : ControllerBase
    {
    private readonly IWeddingRepository _repo;

    public SongsController(IWeddingRepository repo)
    {
      _repo = repo;
    }

    [HttpGet]

    public async Task<IActionResult> GetSongs([FromQuery]SongParams songParams) 
    {
        var songs = await _repo.GetSongs(songParams);

        Response.AddPagination(songs.CurrentPage, songs.PageSize, songs.TotalCount, songs.TotalPages);

        return Ok(songs);
    }

    [HttpPost("{userId}/saved-song/{songId}")]
    public async Task<IActionResult> SaveSong(int userId, int songId)
    {
        if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) return Unauthorized();

        var savedSong = await _repo.GetSavedSong(userId, songId);

        if (savedSong != null) return BadRequest("You already saved this song");

        if(await _repo.GetSong(songId) == null) return NotFound();

        savedSong = new SavedSong
        {
            UserId = userId,
            SongId = songId
        };

        _repo.Add<SavedSong>(savedSong);

        if (await _repo.SaveAll())
            return Ok();

        return BadRequest("Failed to save song");
    }

  }
}