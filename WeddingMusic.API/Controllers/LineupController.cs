using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WeddingMusic.API.Data;
using WeddingMusic.API.Dtos;
using WeddingMusic.API.Models;

namespace WeddingMusic.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class LineupController : ControllerBase
  {
    private readonly IWeddingRepository _repo;
    private readonly IMapper _mapper;

    public LineupController(IWeddingRepository repo, IMapper mapper)
    {
      _mapper = mapper;
      _repo = repo;
    }

    [HttpGet("{id}", Name = "GetLineup")]

    public async Task<IActionResult> GetLineup(int id)
    {
      var lineup = await _repo.GetLineup(id);

      return Ok(lineup);
    }

    [HttpGet("{id}/edit/")]
    public async Task<IActionResult> EditLineup(int id)
    {
      var lineup = await _repo.EditLineup(id);

      return Ok(lineup);
    }

    // [HttpPut("section/{id}")]
    // public async Task<IActionResult> UpdateLineup(int id, LineupForUpdateDto lineupForUpdateDto, string section)
    // {
    //   if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
    //   {
    //     return Unauthorized();
    //   }

    //   var lineupFromRepo = await _repo.GetLineup(id);

    //   _mapper.Map(lineupForUpdateDto, lineupFromRepo.section);

    //   if (await _repo.SaveAll()) {
    //     return NoContent();
    //   }

    //   throw new Exception($"Updating lineup {id} failed on save");
    // }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateLineup(int id, LineupForUpdateDto lineupForUpdateDto)
    {
      if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
      {
        return Unauthorized();
      }

      var lineupFromRepo = await _repo.GetLineup(id);

      _mapper.Map(lineupForUpdateDto, lineupFromRepo);

      if (await _repo.SaveAll()) {
        return NoContent();
      }

      throw new Exception($"Updating lineup {id} failed on save");
    }

    [HttpPost("{userId}")]
    public async Task<IActionResult> CreateLineup(Lineup lineup, int userId)
    {

      var lineupToCreate = _mapper.Map<Lineup>(lineup);

      var lineupToReturn = await _repo.AddLineup(lineupToCreate, userId);

      return CreatedAtRoute("GetLineup", new {Controller= "Lineup", id = lineup.Id}, lineupToReturn);

    }
  }
}