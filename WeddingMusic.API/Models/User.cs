using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingMusic.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public string WeddingDate { get; set; }

        public string Venue { get; set; }

        public string Street { get; set; }

        public string City { get; set; }

        public string SavedSongs { get; set; }

        public ICollection<Lineup> Lineup { get; set; }

  }
}