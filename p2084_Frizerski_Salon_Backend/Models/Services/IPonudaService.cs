using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public interface IPonudaService
    {
        IEnumerable<Ponuda> Get();
        void Add(PonudaVModel x);
        void Update(int id, PonudaVModel z);
        void Delete(int id);
    }
}
