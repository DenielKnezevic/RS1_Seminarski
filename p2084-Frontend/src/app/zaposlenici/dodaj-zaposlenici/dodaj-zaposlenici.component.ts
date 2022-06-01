import { Component,Input, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dodaj-zaposlenici',
  templateUrl: './dodaj-zaposlenici.component.html',
  styleUrls: ['./dodaj-zaposlenici.component.css']
})
export class DodajZaposleniciComponent implements OnInit {
@Input()
dodajZaposlenika:any;
Novi = {
  ime:'',
  prezime:'',
  datumRodjenja:'',
  grad:'',
  drzava:'',
  adresa: '',
  brojTelefona: ''
};
  constructor(private httpklijent : HttpClient) { }

  ngOnInit(): void {
  }

  Ugasi() {
    this.dodajZaposlenika = false;
  }

  Spasi(novi: any) {
    this.httpklijent.post('https://api.p2084.app.fit.ba/api/Zaposlenik',novi).subscribe( x => {
      alert('Uspjesno dodan novi zaposlenik');
      this.dodajZaposlenika = false;
    })
  }
}
