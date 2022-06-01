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
    public class DobavljacController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public DobavljacController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]

        public IEnumerable<Dobavljac> Get()
        {
            var model = _db.Dobavljac.AsQueryable().ToList();
            return model;
        }

        [HttpPost]

        public void Add([FromBody] DobavljacVModel x)
        {
            var dobavljac = new Dobavljac
            {
                NazivDobavljaca = x.NazivDobavljaca,
                BrojTelefona = x.BrojTelefona
            };

            _db.Add(dobavljac);
            _db.SaveChanges();
        }
    }
}
