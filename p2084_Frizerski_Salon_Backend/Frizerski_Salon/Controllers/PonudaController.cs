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
    public class PonudaController : ControllerBase
    {
        private IPonudaService _repository;

        public PonudaController(IPonudaService repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public IEnumerable<Ponuda> Get()
        {
            return this._repository.Get();
        }

        [HttpPost]

        public void Add([FromBody] PonudaVModel x)
        {
            this._repository.Add(x);
        }

        [HttpPatch("{id}")]

        public void Update(int id , [FromBody] PonudaVModel x)
        {
            this._repository.Update(id, x);

        }

        [HttpPost("{id}")]

        public void Delete(int id)
        {
            this._repository.Delete(id);
        }
    }
}
