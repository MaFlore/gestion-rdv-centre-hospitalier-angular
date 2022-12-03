import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  public patient: Patient = new Patient();

  patients : Patient[] = [
    {
      nom: 'AHADJITSE',
      prenom: 'Yawo Florent Mathis',
      adresse: 'Lomé - TOGO',
      telephone: '90632866'
    },
    {
      nom: 'TOGBE',
      prenom: 'Yawo Rita Manuela',
      adresse: 'Lomé - TOGO',
      telephone: '70396845'
    },
    {
      nom: 'TEKO',
      prenom: 'Emmanuelle Clarisse',
      adresse: 'Lomé - TOGO',
      telephone: '78934576'
    },
  ]
}
