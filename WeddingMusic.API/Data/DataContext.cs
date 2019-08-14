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

        public DbSet<SavedSong> SavedSongs { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<SavedSong>()
                .HasKey(keyExpression: k => new {k.UserId, k.SongId});

            builder.Entity<SavedSong>()
                .HasOne(u => u.User)
                .WithMany(u => u.Song)
                .HasForeignKey(u => u.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        }

    }
}