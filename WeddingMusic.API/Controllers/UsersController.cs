using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WeddingMusic.API.Data;
using WeddingMusic.API.Dtos;

namespace WeddingMusic.API.Controllers
{
  [Authorize]
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private readonly IWeddingRepository _repo;
    private readonly IMapper _mapper;

    public UsersController(IWeddingRepository repo, IMapper mapper)
    {
      _mapper = mapper;
      _repo = repo;
    }

    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
      var users = await _repo.GetUsers();

      var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

      return Ok(usersToReturn);
    }

    [HttpGet("{id}", Name = "GetUser")]

    public async Task<IActionResult> GetUser(int id)
    {
      var user = await _repo.GetUser(id);

      var userToReturn = _mapper.Map<UserForDetailedDto>(user);

      return Ok(userToReturn);
    }
  }
}