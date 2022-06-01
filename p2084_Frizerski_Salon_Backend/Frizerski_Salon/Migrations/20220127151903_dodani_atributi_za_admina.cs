using Microsoft.EntityFrameworkCore.Migrations;

namespace Frizerski_Salon.Migrations
{
    public partial class dodani_atributi_za_admina : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Ime",
                table: "Admin",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Prezime",
                table: "Admin",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Ime",
                table: "Admin");

            migrationBuilder.DropColumn(
                name: "Prezime",
                table: "Admin");
        }
    }
}
