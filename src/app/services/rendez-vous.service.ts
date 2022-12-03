import { Injectable } from '@angular/core';
import { Rdv } from '../models/rdv';
import { MedecinService } from './medecin.service';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  patients = this.patientService.patients;
  medecins = this.medecinService.medecins;

  constructor(
    private patientService: PatientService,
    private medecinService: MedecinService){}

  public rdv:Rdv = new Rdv();

  rdvs: Rdv[] = [
    {
      dateRdv: '2022-11-28',
      patient: this.patients[0],
      medecin: this.medecins[0]
    },
    {
      dateRdv: '2022-11-29',
      patient: this.patients[1],
      medecin: this.medecins[1]
    },
    {
      dateRdv: '2022-11-30',
      patient: this.patients[2],
      medecin: this.medecins[2]
    },
  ]
}
