import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import { PatientService } from '../services/patient.service';
import { RendezVousService } from '../services/rendez-vous.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  afficherListeRdvs: boolean = true;
  patients = this.patientService.patients;
  medecins = this.medecinService.medecins;
  rdvs = this.rdvService.rdvs;
  rdv = this.rdvService.rdv

  constructor(
    private medecinService: MedecinService,
    private patientService: PatientService,
    private rdvService: RendezVousService) {}


  afficherFormulaire(){
    this.afficherListeRdvs = false;
  }

  retour(){
    this.afficherListeRdvs = true;
  }


  ngOnInit(): void {
  }

  onEnregistrer(){

    this.rdvs.push({
      dateRdv:  this.rdv.dateRdv,
      patient: this.rdv.patient,
      medecin: this.rdv.medecin
    });
    this.retour()
  }

  supprimerRdv(i:number){
    for (let index = 0; index < this.rdvs.length; index++) {
      if (index==i) {
        this.rdvs.splice(i,1);
      }

    }

  }

}
