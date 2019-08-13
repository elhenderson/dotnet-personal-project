using System;
using System.ComponentModel.DataAnnotations;

namespace WeddingMusic.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters")]
        public string Password { get; set; }

        [Required]
        public DateTime WeddingDate { get; set; }

        [Required]
        public string Instruments { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }
        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}