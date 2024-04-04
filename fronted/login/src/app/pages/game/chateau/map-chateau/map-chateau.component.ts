import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonnageComponent } from '../personnage/personnage.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-map-chateau',
  standalone: true,
  imports: [
    CommonModule,
    PersonnageComponent,
    FormsModule
  ],
  templateUrl: './map-chateau.component.html',
  styleUrl: './map-chateau.component.scss'
})


export class MapChateauComponent {

  chateauImage = 'assets/chateau/mapchateauNormal.png';
  imageVisibleCode1: boolean = false;
  imageVisibleCode2: boolean = false;
  imageVisibleSkull: boolean = false;
  imageVisibleCle: boolean = false;

  cheminImageCode1: string = 'assets/chateau/indices/indiceCode1.png';
  cheminImageCode2: string = 'assets/chateau/indices/incideCode2.png';
  cheminImageCle: string = 'assets/chateau/objets/cle.png';
  cheminImageSkull: string = 'assets/chateau/indices/indiceSkull.png';

  codePorteZoneTextVisible: boolean = false;
  laveImage: boolean = false;
  porteOuverteImage: boolean = false;

  tonneau(): void {
    this.imageVisibleCode2 = !this.imageVisibleCode2;
  }

  coffre(): void {
    this.imageVisibleCode1 = !this.imageVisibleCode1;
  }

  fenetre(): void {
    this.imageVisibleCle = !this.imageVisibleCle;
  }

  skull(): void {
    this.imageVisibleSkull = !this.imageVisibleSkull;
  }

  porte(): void {
    if(this.laveImage == false){
      this.chateauImage = 'assets/chateau/mapchateauNormalOuvert.png';
    }else{
      this.chateauImage = 'assets/chateau/mapchateauPorteOuverte.png';
    }
    this.porteOuverteImage = true;
 
  }

  lave(): void {
    if(this.porteOuverteImage == false){
      this.chateauImage = 'assets/chateau/mapchateau.png';
    }else{
      this.chateauImage = 'assets/chateau/mapchateauPorteOuverte.png';
    }
    this.laveImage = true;
  }


  codePorteText: string = '';

  envoyerCodePorte() {
    this.codePorteZoneTextVisible = !this.codePorteZoneTextVisible;
    if(this.codePorteText === 'lapin rose'){
      console.log('Le code :', this.codePorteText);
      this.porte();
    }else{
      console.log('Mauvais code');
    }
  }

}



