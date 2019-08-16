using System.Collections.Generic;
using System.Threading.Tasks;
using WeddingMusic.API.Helpers;
using WeddingMusic.API.Models;

namespace WeddingMusic.API.Data
{
    public interface IWeddingRepository
    {
         void Add<T>(T entity) where T: class;

         void Delete<T>(T entity) where T: class;

         Task<bool> SaveAll();

         Task<IEnumerable<User>> GetUsers();

         Task<User> GetUser(int id);

         Task<Lineup> AddLineup(Lineup lineup, int userId);

         Task<Lineup> GetLineup(int id);

         Task<Lineup> EditLineup(int id);

         Task<Song> GetSong(int id);

         Task<PagedList<Song>> GetSongs(SongParams songParams);

        Task<SavedSong> GetSavedSong(int userId, int songId);
    
    }
}