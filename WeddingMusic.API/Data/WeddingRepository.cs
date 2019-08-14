using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game.API.Data;
using Game.API.Models;
using Microsoft.EntityFrameworkCore;
using WeddingMusic.API.Helpers;
using WeddingMusic.API.Models;

namespace WeddingMusic.API.Data
{
  public class WeddingRepository : IWeddingRepository
  {
    private readonly DataContext _context;

    public WeddingRepository(DataContext context)
    {
        _context = context;
    }
    public void Add<T>(T entity) where T : class
    {
      _context.Add(entity);
    }

    public void Delete<T>(T entity) where T : class
    {
      _context.Remove(entity);
    }

    public async Task<User> GetUser(int id)
    {
      var user = await _context.Users.Include(p => p.Lineup).FirstOrDefaultAsync(u => u.Id == id);

      return user;
    }

    public async Task<IEnumerable<User>> GetUsers()
    {
      var users = await _context.Users.Include(p => p.Lineup).ToListAsync();

      return users;
    }

    public async Task<Lineup> GetLineup(int id)
    {
      var lineup = await _context.Lineup.FirstOrDefaultAsync(u => u.UserId == id);

      return lineup;
    }

    public async Task<Lineup> EditLineup(int id)
    {
        var lineup = await _context.Lineup.FirstOrDefaultAsync(u => u.UserId == id);

        return lineup;
    }

    public async Task<PagedList<Song>> GetSongs(SongParams songParams)
    {
        var songs =  _context.Songs.AsQueryable();

        songs = songs.Where(u => u.Genre == songParams.Genre);

        return await PagedList<Song>.CreateAsync(songs, songParams.PageNumber, songParams.PageSize);
    }

    public async Task<bool> SaveAll()
    {
      return await _context.SaveChangesAsync() > 0;
    }

  }
}