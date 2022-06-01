import { Component,Input, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-edit-lokacija',
  templateUrl: './edit-lokacija.component.html',
  styleUrls: ['./edit-lokacija.component.css']
})
export class EditLokacijaComponent implements OnInit {
  @Input()
  editLokacija:any;

  constructor(private httpKlijent : HttpClient) { }

  ngOnInit(): void {
  }

  Ugasi() {
    this.editLokacija = null;
  }

  Spasi(x: any) {
    this.httpKlijent.patch('https://api.p2084.app.fit.ba/api/Lokacija/' + x.id, x).subscribe(x => {
      alert('Lokacija uspjesno editovana');
      this.editLokacija = null;

    })
  }
}
