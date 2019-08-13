using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpotifyAPI.Web;
using SpotifyAPI.Web.Auth;
using SpotifyAPI.Web.Enums;
using SpotifyAPI.Web.Models;
using WeddingMusic.API.Data;
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

    public async Task<IActionResult> GetSongs() 
    {
        var songs = await _repo.GetSongs();

        return Ok(songs);
    }

  }
}