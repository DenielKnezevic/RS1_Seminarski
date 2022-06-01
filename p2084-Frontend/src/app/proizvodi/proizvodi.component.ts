import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent implements OnInit {
  proizvodi: any;
  filter: string = '';
  noviProizvod = false;
  odabraniProizvod:any;
  dodajProizvod = {
    nazivProizvoda: '',
    cijena: 0,
  };

  constructor(private httpKlijent: HttpClient) {
  }

  ngOnInit(): void {
    this.httpKlijent.get("https://api.p2084.app.fit.ba/api/Proizvod").subscribe(x =>
      this.proizvodi = x);
  }

  Filtriraj() {
    if (this.filter == null)
      return [];
    return this.proizvodi.filter((x: any) => x.nazivProizvoda.length == 0 || x.nazivProizvoda.toLowerCase().startsWith(this.filter.toLowerCase()));

  }

  ObrisiProizvod(x: any) {
    this.httpKlijent.post("https://api.p2084.app.fit.ba/api/Proizvod/" + x.id, null).subscribe(x => {
      alert('Uspjesno brisanje zaposlenika');
      this.UcitajPodatke()
    });
  }

  Uredi(x: any) {
      this.odabraniProizvod = x;
  }

  UcitajPodatke() {
    this.httpKlijent.get("https://api.p2084.app.fit.ba/api/Proizvod").subscribe(x =>
      this.proizvodi = x);
  }

  Dodaj(x: any) {
    this.httpKlijent.post('https://api.p2084.app.fit.ba/api/Proizvod', x).subscribe(x => {
      alert('Uspjesno dodan novi proizvod');
      this.dodajProizvod.nazivProizvoda = '';
      this.dodajProizvod.cijena = 0;
      this.noviProizvod = false;
      this.UcitajPodatke();
    })
  }
}
