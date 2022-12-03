import { Injectable } from '@angular/core';
import { Medecin } from '../models/medecin';
import { SpecialiteService } from './specialite.service';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  specialites = this.specialiteService.specialites;

  constructor(private specialiteService: SpecialiteService){}

  public medecin:Medecin = new Medecin();

  medecins: Medecin[] = [
    {
      nom: 'AYENA',
      prenom: 'Adebayor',
      adresse: 'LoméGan - TOGO',
      telephone: '89563888',
      specialite: this.specialites[0]
    },
    {
      nom: 'DOSSOU',
      prenom: 'Egnonam',
      adresse: 'Avédzi - TOGO',
      telephone: '67890647',
      specialite: this.specialites[1]
    },
    {
      nom: 'BAMANA',
      prenom: 'Nathalie',
      adresse: 'Tsévié - TOGO',
      telephone: '89345673',
      specialite: this.specialites[2]
    },
  ]
}
