using AutoMapper;
using Game.API.Models;
using WeddingMusic.API.Dtos;

namespace WeddingMusic.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<Lineup, LineupForDetailedDto>();
        }
    }
}