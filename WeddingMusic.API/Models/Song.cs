namespace WeddingMusic.API.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }
        public string Sample { get; set; }
        public bool Saved { get; set; }

    }
}