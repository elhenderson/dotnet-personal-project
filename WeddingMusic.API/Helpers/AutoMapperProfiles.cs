using AutoMapper;
using WeddingMusic.API.Dtos;
using WeddingMusic.API.Models;

namespace WeddingMusic.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<Lineup, LineupForDetailedDto>();
            CreateMap<LineupForUpdateDto, Lineup>();
            CreateMap<UserForRegisterDto, User>();
        }
    }
}