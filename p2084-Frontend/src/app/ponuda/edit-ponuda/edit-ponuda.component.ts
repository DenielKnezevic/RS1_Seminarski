import { Component,Input, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-ponuda',
  templateUrl: './edit-ponuda.component.html',
  styleUrls: ['./edit-ponuda.component.css']
})
export class EditPonudaComponent implements OnInit {
  @Input()
  editPonuda: any;

  constructor(private httpKlijent : HttpClient) { }

  ngOnInit(): void {
  }

  Ugasi() {
    this.editPonuda = null;
  }

  Spasi(x: any) {
    this.httpKlijent.patch('https://api.p2084.app.fit.ba/api/Ponuda/' + x.id, x).subscribe(x => {
      alert('Ponuda uspjesno editovana');
      this.editPonuda = null;

    })
  }
}
