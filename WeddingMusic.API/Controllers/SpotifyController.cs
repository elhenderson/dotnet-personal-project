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
            CredentialsAuth auth = new CredentialsAuth("ddc065a237b2431696635124e5785d8d", "23436e2031b04f5783a7865b99489a04");
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
            CredentialsAuth auth = new CredentialsAuth("ddc065a237b2431696635124e5785d8d", "23436e2031b04f5783a7865b99489a04");
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