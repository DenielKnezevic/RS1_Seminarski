import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {
  filter:string = '';
  novaPonuda = false
  ponuda:any;
  odabranaPonuda:any;
  dodajPonudu = {
    nazivPonude: '',
    cijena: 0,
  };

  constructor( private httpKlijent : HttpClient) { }

  ngOnInit(): void {
    this.httpKlijent.get("https://api.p2084.app.fit.ba/api/Ponuda").subscribe(x =>
      this.ponuda = x);
  }

  UcitajPonudu(){
    this.httpKlijent.get("https://api.p2084.app.fit.ba/api/Ponuda").subscribe(x =>
      this.ponuda = x);
  }

  Filtriraj() {
    if(this.filter == null)
      return [];
    return this.ponuda.filter((x:any) => x.nazivPonude.length == 0 || x.nazivPonude.toLowerCase().startsWith(this.filter.toLowerCase()))
  }

  ObrisiProizvod(x: any) {
    this.httpKlijent.post("https://api.p2084.app.fit.ba/api/Ponuda/" + x.id, null).subscribe(x => {
      alert('Uspjesno brisanje ponude');
      this.UcitajPonudu();
    });
  }

  Uredi(x: any) {
    this.odabranaPonuda = x;
  }

  Dodaj(x: any) {
    this.httpKlijent.post('https://api.p2084.app.fit.ba/api/Ponuda', x).subscribe(x => {
      alert('Uspjesno dodana nova ponuda');
      this.dodajPonudu.nazivPonude = '';
      this.dodajPonudu.cijena = 0;
      this.novaPonuda = false;
      this.UcitajPonudu();
    })
  }
}
