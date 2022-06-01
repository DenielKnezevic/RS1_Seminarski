using Frizerski_Salon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public interface IProizvodiService
    {
        IEnumerable<Proizvod> Get();
        void Add(ProizvodVModel x);
        void Update(int id, ProizvodVModel z);
        void Delete(int id);
    }
}
