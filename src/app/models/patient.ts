export class Patient{
  nom!: string;
  prenom!: string;
  adresse!: string;
  telephone!: string;

  public constructor(){
    this.nom = "";
    this.prenom = "";
    this.adresse = "";
    this.telephone = ""
  }
}
