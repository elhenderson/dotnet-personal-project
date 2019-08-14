namespace WeddingMusic.API.Models
{
    public class SavedSong
    {
        public int UserId { get; set; }
        public int SongId { get; set; }

        public User User { get; set; }
        public Song Song { get; set; }
    }
}