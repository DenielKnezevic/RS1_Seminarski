import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as moment from 'moment';

@Component({
  selector: 'app-zaposlenici',
  templateUrl: './zaposlenici.component.html',
  styleUrls: ['./zaposlenici.component.css']
})
export class ZaposleniciComponent implements OnInit {

  zaposlenici:any;
  imeprezime:string = '';
  odabraniZaposlenik:any;
  noviZaposlenik = false;
  dodajZaposlenika = {
    ime:'',
    prezime:'',
    datumRodjenja:'',
    grad:'',
    drzava:'',
    adresa: '',
    brojTelefona: ''
  };
  dateString:any;
  momentVariable:any;
  stringValue:any;

  constructor(private httpKlijent : HttpClient) { }


  ngOnInit(): void {
    this.httpKlijent.get("https://api.p2084.app.fit.ba/api/Zaposlenik").subscribe(x =>
      this.zaposlenici = x);
  }


  Filtriraj(){
    if(this.imeprezime == null)
      return [];
    return this.zaposlenici.filter( (x:any) => x.ime.length == 0 || (x.ime + ' ' + x.prezime).toLowerCase().startsWith(this.imeprezime.toLowerCase()) || (x.prezime + ' ' + x.ime).toLowerCase().startsWith(this.imeprezime.toLowerCase()));
  }

  UcitajPodatke()
  {
    this.httpKlijent.get("https://api.p2084.app.fit.ba/api/Zaposlenik").subscribe(x =>
      this.zaposlenici = x);
  }

  ObrisiZaposlenika(x:any) {
    this.httpKlijent.post("https://api.p2084.app.fit.ba/api/Zaposlenik/"+ x.id,null).subscribe( x => {
      alert('Uspjesno brisanje zaposlenika');
      this.UcitajPodatke()
    });
  }

  Uredi(x:any) {
    this.odabraniZaposlenik = x;
    this.odabraniZaposlenik.prikazi = true;
  }

  Novi()
  {
    this.noviZaposlenik = true;
  }

  Dodaj(x:any) {
    this.dateString = x.datumRodjenja;
    this.momentVariable = moment(this.dateString,'DD-MM-YYYY');
    this.stringValue = this.momentVariable.format('YYYY-MM-DD');
    x.datumRodjenja = this.stringValue;
    this.httpKlijent.post('https://api.p2084.app.fit.ba/api/Zaposlenik', x).subscribe(x => {
      alert('Uspjesno dodan novi zaposlenik');
      this.dodajZaposlenika = {
        ime:'',
        prezime:'',
        datumRodjenja:'',
        grad:'',
        drzava:'',
        adresa: '',
        brojTelefona: ''
      };
      this.noviZaposlenik = false ;
      this.UcitajPodatke();
    })
  }
}
