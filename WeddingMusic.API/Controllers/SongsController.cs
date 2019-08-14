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

  }
}