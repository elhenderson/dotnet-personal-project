using System.Collections.Generic;
using Newtonsoft.Json;
using WeddingMusic.API.Models;

namespace Game.API.Data
{
  public class Seed
  {
    private readonly DataContext _context;
    public Seed(DataContext context)
    {
      _context = context;

    }

    public void SeedSongs()
    {
        var songData = System.IO.File.ReadAllText("../wwwroot/SongSeedData.json");
        var songs = JsonConvert.DeserializeObject<List<Song>>(songData);

        foreach (var song in songs)
        {
            _context.Songs.Add(song);
        }

        _context.SaveChanges();

        // var userData = System.IO.File.ReadAllText("SEED DATA HERE");
        // var users = JsonConvert.DeserializeObject<List<User>>(userData);
        // foreach (var user in users)
        // {
        //     byte[] passwordHash, passwordSalt;
        //     CreatePasswordHash("password", out passwordHash, out passwordSalt);

        //     user.PasswordHash = passwordHash;
        //     user.PasswordSalt = passwordSalt;
        //     user.Username = user.Username.ToLower();

        //     _context.Users.Add(user);
        // }

        // _context.SaveChanges();
    }
    //     private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
    // {
    //     using (var hmac = new System.Security.Cryptography.HMACSHA512())
    //     {
    //         passwordSalt = hmac.Key;
    //         passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
    //     }
    // }
  }
}