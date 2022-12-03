import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { MedecinComponent } from './medecin/medecin.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContenuComponent } from './contenu/contenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    MedecinComponent,
    SpecialiteComponent,
    AccueilComponent,
    RendezVousComponent,
    NavigationComponent,
    ContenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
