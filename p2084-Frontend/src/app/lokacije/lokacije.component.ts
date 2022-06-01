import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-lokacije',
  templateUrl: './lokacije.component.html',
  styleUrls: ['./lokacije.component.css']
})
export class LokacijeComponent implements OnInit {
  lokacije:any
  filter:string = '';
  novaLokacija = false;
  odabranaLokacija:any;
  dodajLokaciju = {
    grad: '',
    drzava: '',
    adresa: ''
  };

  constructor(private httpKlijent : HttpClient) { }

  ngOnInit(): void {
    this.httpKlijent.get("https://api.p2084.app.fit.ba/api/Lokacija").subscribe(x =>
      this.lokacije = x);
  }

  UcitajLokacije()
  {
    this.httpKlijent.get("https://api.p2084.app.fit.ba/api/Lokacija").subscribe(x =>
      this.lokacije = x);
  }

  Filtriraj() {
    if(this.filter == null)
      return [];
    return this.lokacije.filter((x:any) => x.grad.length == 0 || x.drzava.length == 0 || x.adresa.length == 0 ||
                                            x.grad.toLowerCase().startsWith(this.filter.toLowerCase()) ||
                                            x.drzava.toLowerCase().startsWith(this.filter.toLowerCase()) ||
                                            x.adresa.toLowerCase().startsWith(this.filter.toLowerCase()));
  }

  ObrisiProizvod(x: any) {
    this.httpKlijent.post("https://api.p2084.app.fit.ba/api/Lokacija/" + x.id, null).subscribe(x => {
      alert('Uspjesno brisanje lokacije');
      this.UcitajLokacije();
    });
  }

  Uredi(x: any) {
    this.odabranaLokacija = x;
  }

  Dodaj(x:any) {
    this.httpKlijent.post('https://api.p2084.app.fit.ba/api/Lokacija', x).subscribe(x => {
      alert('Uspjesno dodana nova lokacija');
      this.dodajLokaciju.grad = '';
      this.dodajLokaciju.drzava = '';
      this.dodajLokaciju.adresa = '';
      this.novaLokacija = false;
      this.UcitajLokacije();
    })
  }
}
