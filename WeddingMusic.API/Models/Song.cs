using System.Collections.Generic;

namespace WeddingMusic.API.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }
        public string SampleArtist { get; set; }
        public bool Saved { get; set; }

        public string Image { get; set; }

        public string Genre { get; set; }


    }
}