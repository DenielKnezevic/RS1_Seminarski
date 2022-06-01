using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public interface IZaposlenikService
    {
        IEnumerable<Zaposlenik> Get(string ime);
        void Add(ZaposlenikVModel x);
        void Update(int id, ZaposlenikVModel z);
        void Delete(int id);
    }
}
