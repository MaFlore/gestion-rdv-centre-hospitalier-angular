import { Medecin } from "./medecin";
import { Patient } from "./patient";

export class Rdv{
  dateRdv!: string;
  patient!: Patient;
  medecin!: Medecin
}
