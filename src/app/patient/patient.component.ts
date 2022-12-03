import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { FormGroup ,FormControl , Validators } from '@angular/forms';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  voirListesPatients: boolean = true;
  patients = this.patientService.patients;
  patient = this.patientService.patient;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  afficherFormulaire(){
    this.voirListesPatients = false;
  }

  retour(){
    this.voirListesPatients = true;
  }

  PatientForm = new FormGroup({
    'nom':new FormControl('',Validators.required),
    'prenom':new FormControl('',Validators.required),
    'adresse':new FormControl('',Validators.required),
    'telephone':new FormControl('',Validators.required),
  })

  onEnregistrer(){

    this.patients.push({
      nom: this.patient.nom,
      prenom:  this.patient.prenom,
      adresse: this.patient.adresse,
      telephone: this.patient.telephone
    });
    this.patient = new Patient();
    this.retour();
  }

  supprimerPatient(i:number){
    for (let index = 0; index < this.patients.length; index++) {
      if (index==i) {
        this.patients.splice(i,1);
      }

    }

  }
}
