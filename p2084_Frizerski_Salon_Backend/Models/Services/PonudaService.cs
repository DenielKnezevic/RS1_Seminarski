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
    public class PonudaService : IPonudaService
    {
        private readonly ApplicationDbContext _db;
        public PonudaService(ApplicationDbContext db)
        {
            _db = db;
        }
        public void Add(PonudaVModel x)
        {
            var ponuda = new Ponuda
            {
                NazivPonude = x.NazivPonude,
                Cijena = x.Cijena,
                AdminID = 1
            };

            _db.Add(ponuda);
            _db.SaveChanges();
        }

        public void Delete(int id)
        {
            var ponuda = _db.Ponuda.FirstOrDefault(x => x.ID == id);

            _db.Ponuda.Remove(ponuda);
            _db.SaveChanges();
        }

        public IEnumerable<Ponuda> Get()
        {
            var model = _db.Ponuda.Include(x => x.Admin).AsQueryable().ToList();
            return model;
        }

        public void Update(int id, PonudaVModel x)
        {
            var ponuda = _db.Ponuda.FirstOrDefault(x => x.ID == id);

            ponuda.NazivPonude = x.NazivPonude;
            ponuda.Cijena = x.Cijena;

            _db.SaveChanges();
        }
    }
}
