import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl , Validators } from '@angular/forms';
import { Specialite } from '../models/specialite';
import { SpecialiteService } from '../services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {

  voirListesSpecialites: boolean = true;
  specialites = this.specialiteService.specialites;
  specialite = this.specialiteService.specialite;

  constructor(private specialiteService: SpecialiteService) { }

  ngOnInit(): void {
  }

  afficherFormulaire(){
    this.voirListesSpecialites = false;
  }

  retour(){
    this.voirListesSpecialites = true;
  }

  SpecialiteForm = new FormGroup({
    'code':new FormControl('',Validators.required),
    'libelle':new FormControl('',Validators.required),
  })

  onEnregistrer(){

    this.specialites.push({
      code: this.specialite.code,
      libelle:  this.specialite.libelle,
    });
    this.specialite = new Specialite();
    this.retour();
  }

  supprimerSpecialite(i:number){
    for (let index = 0; index < this.specialites.length; index++) {
      if (index==i) {
        this.specialites.splice(i,1);
      }

    }

  }

}
