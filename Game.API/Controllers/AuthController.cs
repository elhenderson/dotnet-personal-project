using System.Threading.Tasks;
using Game.API.Data;
using Game.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Game.API.Controllers
{
  public class AuthController : ControllerBase
  {
    private readonly IAuthRepository _repo;
    public AuthController(IAuthRepository repo)
    {
      _repo = repo;

    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(string username, string password)
    {
        username = username.ToLower();

        if (await _repo.UserExists(username))
            return BadRequest("Username already exists");
        
        var userToCreate = new User
        {
            Username = username
        };

        var createdUser = await _repo.Register(userToCreate, password);

        return StatusCode(201);

    }
  }
}