import {Component, Input, OnInit} from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-zaposlenici',
  templateUrl: './edit-zaposlenici.component.html',
  styleUrls: ['./edit-zaposlenici.component.css']
})
export class EditZaposleniciComponent implements OnInit {
@Input()
editZaposlenik:any;
  constructor(private httpklijent : HttpClient) { }

  ngOnInit(): void {
  }

  Ugasi() {
    this.editZaposlenik = null;
  }

  Spasi(x:any)
  {
    this.httpklijent.patch('https://api.p2084.app.fit.ba/api/Zaposlenik/' + x.id , x).subscribe(x => {
      alert('Zaposlenik uspjesno editovan');
      this.editZaposlenik = null;
    })
  }
}
