using Microsoft.EntityFrameworkCore.Migrations;

namespace Game.API.Migrations
{
    public partial class SampleArtist : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Sample",
                table: "Songs",
                newName: "SampleArtist");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SampleArtist",
                table: "Songs",
                newName: "Sample");
        }
    }
}
