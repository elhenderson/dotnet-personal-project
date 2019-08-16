using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game.API.Data;
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

    public async Task<Lineup> AddLineup(Lineup lineup, int userId)
    {
        lineup.UserId = userId;
        await _context.Lineup.AddAsync(lineup);
        await _context.SaveChangesAsync();

        return lineup;
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

    public async Task<Song> GetSong(int id)
    {
      var song = await _context.Songs.FirstOrDefaultAsync(u => u.Id == id);

      return song;
    }


    // public async Task<PagedList<Song>> GetSavedSongs(SongParams songParams, int userId)
    // {
    //     var songs =  _context.Songs.Where(u => u.UserId == userId).OrderBy(u => u.Title).AsQueryable();

    //     if (songs.Where(u => u.Genre == songParams.Genre).Any()) {
    //         songs = songs.Where(u => u.Genre == songParams.Genre).OrderBy(u => u.Title);
    //     }

    //     if (!string.IsNullOrEmpty(songParams.OrderBy))
    //     {
    //         switch (songParams.OrderBy)
    //         {
    //             case "artist": 
    //                 songs = songs.OrderBy(u => u.Artist);
    //                 break;
    //             default:
    //                 songs = songs.OrderBy(u => u.Title);
    //                 break;
    //         }
    //     }
       

    //     return await PagedList<Song>.CreateAsync(songs, songParams.PageNumber, songParams.PageSize);
    // }

    public async Task<SavedSong> GetSavedSong(int userId, int songId)
    {
      return await _context.SavedSongs.FirstOrDefaultAsync(u => u.UserId == userId && u.SongId == songId);
    }

    public async Task<PagedList<Song>> GetSongs(SongParams songParams)
    {
        var songs =  _context.Songs.OrderBy(u => u.Title).AsQueryable();

        if (songs.Where(u => u.Genre == songParams.Genre).Any()) {
            songs = songs.Where(u => u.Genre == songParams.Genre).OrderBy(u => u.Title);
        }

        if (songParams.Saved)
        {
            var savedSongs = await GetSavedSongs(songParams.UserId);
            songs = songs.Where(u => savedSongs.Contains(u.Id));
        }

        if (!string.IsNullOrEmpty(songParams.OrderBy))
        {
            switch (songParams.OrderBy)
            {
                case "artist": 
                    songs = songs.OrderBy(u => u.Artist);
                    break;
                default:
                    songs = songs.OrderBy(u => u.Title);
                    break;
            }
        }
       

        return await PagedList<Song>.CreateAsync(songs, songParams.PageNumber, songParams.PageSize);
    }

    private async Task<IEnumerable<int>> GetSavedSongs(int userId)
    {
        var user = await _context.Users.Include(x => x.Song).FirstOrDefaultAsync(u => u.Id == userId);


        return user.Song.Where(u => u.UserId == userId).Select(i => i.SongId);
        
    }

    public async Task<bool> SaveAll()
    {
      return await _context.SaveChangesAsync() > 0;
    }


  }
}