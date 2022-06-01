import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ZaposleniciComponent } from './zaposlenici/zaposlenici.component';
import { LokacijeComponent } from './lokacije/lokacije.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { NovostiComponent } from './novosti/novosti.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { UpravljanjePonudomComponent } from './upravljanje-ponudom/upravljanje-ponudom.component';
import { UpravljanjeGalerijomComponent } from './upravljanje-galerijom/upravljanje-galerijom.component';
import { UpravljanjeNovostimaComponent } from './upravljanje-novostima/upravljanje-novostima.component';
import { TerminComponent } from './termin/termin.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { UpravljanjeProizvodimaComponent } from './upravljanje-proizvodima/upravljanje-proizvodima.component';
import { UpravljanjeLokacijamaComponent } from './upravljanje-lokacijama/upravljanje-lokacijama.component';
import { ArhivaComponent } from './arhiva/arhiva.component';
import { UpravljanjeRezervacijamaComponent } from './upravljanje-rezervacijama/upravljanje-rezervacijama.component';
import { EditZaposleniciComponent } from './zaposlenici/edit-zaposlenici/edit-zaposlenici.component';
import { DodajZaposleniciComponent } from './zaposlenici/dodaj-zaposlenici/dodaj-zaposlenici.component';
import { EditProizvodiComponent } from './proizvodi/edit-proizvodi/edit-proizvodi.component';
import { EditLokacijaComponent } from './lokacije/edit-lokacija/edit-lokacija.component';
import { EditPonudaComponent } from './ponuda/edit-ponuda/edit-ponuda.component';

@NgModule({
  declarations: [
    AppComponent,
    ZaposleniciComponent,
    LokacijeComponent,
    ProizvodiComponent,
    PonudaComponent,
    NovostiComponent,
    GalerijaComponent,
    UpravljanjePonudomComponent,
    UpravljanjeGalerijomComponent,
    UpravljanjeNovostimaComponent,
    TerminComponent,
    RegistracijaComponent,
    UpravljanjeProizvodimaComponent,
    UpravljanjeLokacijamaComponent,
    ArhivaComponent,
    UpravljanjeRezervacijamaComponent,
    EditZaposleniciComponent,
    DodajZaposleniciComponent,
    EditProizvodiComponent,
    EditLokacijaComponent,
    EditPonudaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'zaposlenici' , component: ZaposleniciComponent},
      {path: 'galerija' , component: GalerijaComponent},
      {path: 'lokacije' , component: LokacijeComponent},
      {path: 'ponuda' , component: PonudaComponent},
      {path: 'proizvodi' , component: ProizvodiComponent},
      {path: 'novosti' , component: NovostiComponent},
      {path: 'arhiva' , component: ArhivaComponent},
      {path: 'rezervacija' , component: TerminComponent},
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
