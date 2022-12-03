import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import { SpecialiteService } from '../services/specialite.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  afficherListesMedecins: boolean = true;
  specialites = this.specialiteService.specialites;
  medecins = this.medecinService.medecins;
  medecin = this.medecinService.medecin

  constructor(
    private specialiteService: SpecialiteService,
    private medecinService: MedecinService) {}

  afficherFormulaire(){
    this.afficherListesMedecins = false;
  }

  retour(){
    this.afficherListesMedecins = true;
  }


  ngOnInit(): void {
  }

  onEnregistrer(){

    this.medecins.push({
      nom:  this.medecin.nom,
      prenom: this.medecin.prenom,
      adresse: this.medecin.adresse,
      telephone: this.medecin.telephone,
      specialite: this.medecin.specialite
    });
    this.retour()
  }

  supprimerMedecin(i:number){
    for (let index = 0; index < this.medecins.length; index++) {
      if (index==i) {
        this.medecins.splice(i,1);
      }

    }

  }
}
