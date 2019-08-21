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
using Microsoft.Azure.KeyVault;
using Microsoft.Azure.Services.AppAuthentication;

namespace WeddingMusic.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]


    public class SpotifyController : ControllerBase
    {
        
        [HttpGet("{title}")]
        public async Task<IActionResult> GetSpotify(string title)
        {
            AzureServiceTokenProvider azureServiceTokenProvider = new AzureServiceTokenProvider();  
            var keyVaultClient = new KeyVaultClient(
                new KeyVaultClient.AuthenticationCallback(azureServiceTokenProvider.KeyVaultTokenCallback)
            );
            var spotifyID = await keyVaultClient.GetSecretAsync("https://wakeyvault.vault.azure.net/secrets/appSettings--connectionSettings--spotifyId/69cdf003254f4b2e81a5ce90dffe80ab");
            var spotifySecret = await keyVaultClient.GetSecretAsync("https://wakeyvault.vault.azure.net/secrets/appSettings--connectionStrings--spotifySecret/49de24c1d0a44edcb4c7e9379b49d1a4");
            CredentialsAuth auth = new CredentialsAuth(spotifyID.Value, spotifySecret.Value);
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
            AzureServiceTokenProvider azureServiceTokenProvider = new AzureServiceTokenProvider();  
            var keyVaultClient = new KeyVaultClient(
                new KeyVaultClient.AuthenticationCallback(azureServiceTokenProvider.KeyVaultTokenCallback)
            );
            var spotifyID = await keyVaultClient.GetSecretAsync("https://wakeyvault.vault.azure.net/secrets/appSettings--connectionSettings--spotifyId/69cdf003254f4b2e81a5ce90dffe80ab");
            var spotifySecret = await keyVaultClient.GetSecretAsync("https://wakeyvault.vault.azure.net/secrets/appSettings--connectionStrings--spotifySecret/49de24c1d0a44edcb4c7e9379b49d1a4");
            CredentialsAuth auth = new CredentialsAuth(spotifyID.Value, spotifySecret.Value);
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