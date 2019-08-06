using Game.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Game.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }

        public DbSet<Lineup> Lineup { get; set; }
    }
}