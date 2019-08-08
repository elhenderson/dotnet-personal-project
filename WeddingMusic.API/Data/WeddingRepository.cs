using System.Collections.Generic;
using System.Threading.Tasks;
using Game.API.Data;
using Game.API.Models;
using Microsoft.EntityFrameworkCore;
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

    public async Task<IEnumerable<Song>> GetSongs()
    {
        var songs = await _context.Songs.ToListAsync();

        return songs;
    }

    public async Task<bool> SaveAll()
    {
      return await _context.SaveChangesAsync() > 0;
    }

  }
}