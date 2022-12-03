import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MedecinComponent } from './medecin/medecin.component';
import { PatientComponent } from './patient/patient.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { SpecialiteComponent } from './specialite/specialite.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'patients', component: PatientComponent },
  { path: 'specialites', component: SpecialiteComponent },
  { path: 'medecins', component: MedecinComponent },
  { path: 'rendez-vous', component: RendezVousComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
