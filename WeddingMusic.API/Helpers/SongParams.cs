namespace WeddingMusic.API.Helpers
{
    public class SongParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        }

        public string Genre { get; set; }

        public string OrderBy { get; set; }
        
        
    }
}