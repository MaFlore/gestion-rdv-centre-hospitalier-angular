import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {


  public specialite: Specialite = new Specialite();

  specialites : Specialite[] = [
    {
      code: 'BIO',
      libelle: 'Biochimie',
    },
    {
      code: 'CHIR',
      libelle: 'Chirurgie',
    },
    {
      code: 'CAR',
      libelle: 'Cardiologie',
    },
  ]
}
