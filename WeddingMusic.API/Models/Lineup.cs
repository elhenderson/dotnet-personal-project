namespace WeddingMusic.API.Models
{
  public class Lineup
  {
    public int Id { get; set; }
    public string Prelude { get; set; }

    public string Family { get; set; }

    public string BridalParty { get; set; }

    public string Processional { get; set; }

    public string Unity { get; set; }

    public string Recessional { get; set; }

    public string Postlude { get; set; }

    public User User { get; set; }
    public int UserId { get; set; }
  }
}