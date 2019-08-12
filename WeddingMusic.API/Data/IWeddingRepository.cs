using System.Collections.Generic;
using System.Threading.Tasks;
using Game.API.Models;
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

         Task<Lineup> GetLineup(int id);

         Task<Lineup> EditLineup(int id);

         Task<IEnumerable<Song>> GetSongs();

    
    }
}