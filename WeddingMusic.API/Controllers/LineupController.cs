using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeddingMusic.API.Data;
using WeddingMusic.API.Models;

namespace WeddingMusic.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LineupController : ControllerBase
    {
    private readonly IWeddingRepository _repo;

    public LineupController(IWeddingRepository repo)
    {
      _repo = repo;
    }

    [HttpGet("{id}")]

    public async Task<IActionResult> GetLineup(int id) 
    {
        var lineup = await _repo.GetLineup(id);

        return Ok(lineup);
    }
  }
}