using Microsoft.EntityFrameworkCore.Migrations;

namespace Game.API.Migrations
{
    public partial class Instruments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Instruments",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Instruments",
                table: "Users");
        }
    }
}
