using Microsoft.EntityFrameworkCore.Migrations;

namespace Frizerski_Salon.Migrations
{
    public partial class dodavanje_prikaz_na_zaposlenika : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Prikaz",
                table: "Zaposlenik",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Prikaz",
                table: "Zaposlenik");
        }
    }
}
