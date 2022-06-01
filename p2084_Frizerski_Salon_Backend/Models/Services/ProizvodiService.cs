using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public class ProizvodiService : IProizvodiService
    {

        private readonly ApplicationDbContext _db;
        public ProizvodiService(ApplicationDbContext db)
        {
            _db = db;
        }
        public void Add(ProizvodVModel x)
        {
            var model = new Proizvod
            {
                NazivProizvoda = x.NazivProizvoda,
                Cijena = x.Cijena,
                SerijskiBroj = Guid.NewGuid().ToString(),
                AdminID = 1,
                DobavljacID = 1
            };

            _db.Add(model);
            _db.SaveChanges();
        }

        public void Delete(int id)
        {
            var proizvod = _db.Proizvod.FirstOrDefault(x => x.ID == id);

            _db.Proizvod.Remove(proizvod);
            _db.SaveChanges();
        }

        public IEnumerable<Proizvod> Get()
        {
            var model = _db.Proizvod.Include(s => s.Admin).Include(s => s.Dobavljac).AsQueryable().ToList();
            return model;
        }

        public void Update(int id, ProizvodVModel x)
        {
            var proizvod = _db.Proizvod.FirstOrDefault(x => x.ID == id);

            proizvod.NazivProizvoda = x.NazivProizvoda;
            proizvod.Cijena = x.Cijena;

            _db.SaveChanges();
        }
    }
}
