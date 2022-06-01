using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LokacijaController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public LokacijaController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]

        public IEnumerable<Lokacija> Get()
        {
            var model = _db.Lokacija.Include( s => s.Admin).AsQueryable().ToList();
            return model;
        }

        [HttpPost]

        public void Add([FromBody] LokacijaVModel x)
        {
            var lokacija = new Lokacija
            {
                Grad = x.Grad,
                Drzava = x.Drzava,
                Adresa = x.Adresa,
                AdminID = 1
            };

            _db.Add(lokacija);
            _db.SaveChanges();
        }

        [HttpPatch("{id}")]

        public void Update(int id, [FromBody] LokacijaVModel x)
        {
            var lokacija = _db.Lokacija.FirstOrDefault(x => x.ID == id);

            lokacija.Grad = x.Grad;
            lokacija.Drzava = x.Drzava;
            lokacija.Adresa = x.Adresa;

            _db.SaveChanges();
        }

        [HttpPost("{id}")]

        public void Delete(int id)
        {
            var lokacija = _db.Lokacija.FirstOrDefault(x => x.ID == id);

            _db.Lokacija.Remove(lokacija);
            _db.SaveChanges();
        }
    }
}
