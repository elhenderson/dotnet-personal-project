using Game.API.Models;
using Microsoft.EntityFrameworkCore;
using WeddingMusic.API.Models;

namespace Game.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<Lineup> Lineup { get; set; }

        public DbSet<Song> Songs { get; set; }
    }
}