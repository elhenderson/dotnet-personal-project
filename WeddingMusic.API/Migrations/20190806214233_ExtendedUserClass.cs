using Microsoft.EntityFrameworkCore.Migrations;

namespace Game.API.Migrations
{
    public partial class ExtendedUserClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "weddingDate",
                table: "Users",
                newName: "WeddingDate");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SavedSongs",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Street",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Venue",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Lineup",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Prelude = table.Column<string>(nullable: true),
                    Family = table.Column<string>(nullable: true),
                    BridalParty = table.Column<string>(nullable: true),
                    Processional = table.Column<string>(nullable: true),
                    Unity = table.Column<string>(nullable: true),
                    Recessional = table.Column<string>(nullable: true),
                    Postlude = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lineup", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Lineup_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Lineup_UserId",
                table: "Lineup",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lineup");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "SavedSongs",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Street",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Venue",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "WeddingDate",
                table: "Users",
                newName: "weddingDate");
        }
    }
}
