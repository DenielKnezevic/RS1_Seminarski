using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ZaposlenikController : ControllerBase
    {
        private IZaposlenikService _repository;
        public ZaposlenikController(IZaposlenikService repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public IEnumerable<Zaposlenik> Get(string ime_prezime)
        {
            return this._repository.Get(ime_prezime);
        }

        [HttpPost]

        public void Add([FromBody] ZaposlenikVModel x)
        {
            this._repository.Add(x);
        }

        [HttpPatch("{id}")]

        public void Update(int id , [FromBody] ZaposlenikVModel z)
        {
            this._repository.Update(id, z);
        }

        [HttpPost("{id}")]

        public void Delete(int id)
        {
            this._repository.Delete(id);
        }

    }
}
