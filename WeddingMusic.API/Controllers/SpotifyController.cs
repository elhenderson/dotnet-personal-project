using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpotifyAPI.Web;
using SpotifyAPI.Web.Auth;
using SpotifyAPI.Web.Enums;
using SpotifyAPI.Web.Models;

namespace WeddingMusic.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]


    public class SpotifyController : ControllerBase
    {
        
        [HttpGet("{title}")]
        public async Task<IActionResult> GetSpotify(string title)
        {
            DotNetEnv.Env.Load();
            var spotifyId = System.Environment.GetEnvironmentVariable("SPOTIFY_ID");
            var spotifySecret = System.Environment.GetEnvironmentVariable("SPOTIFY_SECRET");
            CredentialsAuth auth = new CredentialsAuth(spotifyId, spotifySecret);
            Token token = await auth.GetToken();
            SpotifyWebAPI api = new SpotifyWebAPI() 
            {
                TokenType = token.TokenType,
                AccessToken = token.AccessToken
            };
            
            SearchItem searchItem = api.SearchItems(title, SearchType.Track);

            
            return Ok(searchItem.Tracks.Items[0]);

        }


        [HttpGet("alt/{title}")]
               public async Task<IActionResult> GetSpotifyAlt(string title, string artist)
        {
            DotNetEnv.Env.Load();
            var spotifyId = System.Environment.GetEnvironmentVariable("SPOTIFY_ID");
            var spotifySecret = System.Environment.GetEnvironmentVariable("SPOTIFY_SECRET");
            CredentialsAuth auth = new CredentialsAuth(spotifyId, spotifySecret);
            Token token = await auth.GetToken();
            SpotifyWebAPI api = new SpotifyWebAPI() 
            {
                TokenType = token.TokenType,
                AccessToken = token.AccessToken
            };
            
            SearchItem searchItem = api.SearchItems(title, SearchType.Track);

            
            return Ok(searchItem.Tracks.Items[1]);

        }
    }
}