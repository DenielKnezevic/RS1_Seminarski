using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public class ZaposlenikService : IZaposlenikService
    {

        private readonly ApplicationDbContext _db;

        public ZaposlenikService(ApplicationDbContext db)
        {
            _db = db;
        }
        public void Add(ZaposlenikVModel x)
        {
            var model = new Zaposlenik
            {
                Ime = x.Ime,
                Prezime = x.Prezime,
                Adresa = x.Adresa,
                Grad = x.Grad,
                Drzava = x.Drzava,
                DatumRodjenja = x.DatumRodjenja,
                BrojTelefona = x.BrojTelefona,
                Prikaz = false,
                AdminID = 1
            };

            _db.Add(model);
            _db.SaveChanges();
        }

        public void Delete(int id)
        {
            var zaposlenik = _db.Zaposlenik.FirstOrDefault(x => x.ID == id);
            _db.Zaposlenik.Remove(zaposlenik);
            _db.SaveChanges();
        }

        public IEnumerable<Zaposlenik> Get(string ime_prezime)
        {
            var model = _db.Zaposlenik.Include(s => s.Admin).Where(x => ime_prezime == null || (x.Ime + " " + x.Prezime).ToLower().StartsWith(ime_prezime.ToLower()) || (x.Prezime + " " + x.Ime).ToLower().StartsWith(ime_prezime.ToLower())).AsQueryable().ToList();
            return model;
        }

        public void Update(int id, ZaposlenikVModel z)
        {
            var zaposlenik = _db.Zaposlenik.FirstOrDefault(x => x.ID == id);

            zaposlenik.Ime = z.Ime;
            zaposlenik.Prezime = z.Prezime;
            zaposlenik.Adresa = z.Adresa;
            zaposlenik.Grad = z.Grad;
            zaposlenik.Drzava = z.Drzava;
            zaposlenik.BrojTelefona = z.BrojTelefona;
            zaposlenik.DatumRodjenja = z.DatumRodjenja;

            _db.SaveChanges();
        }
    }
}
