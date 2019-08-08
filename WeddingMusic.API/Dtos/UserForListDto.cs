namespace WeddingMusic.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }

        public string WeddingDate { get; set; }

        public string Venue { get; set; }

        public string Street { get; set; }

        public string City { get; set; }

    }
}