import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodePorteComponent } from '../code-porte/code-porte.component';


@Component({
  selector: 'app-map-chateau',
  standalone: true,
  imports: [
    CommonModule,
    CodePorteComponent
  ],
  templateUrl: './map-chateau.component.html',
  styleUrl: './map-chateau.component.scss'
})


export class MapChateauComponent {

  chateauImage = 'assets/chateau/mapchateauNormal.png';
  imageVisibleCode: boolean = false;
  imageVisibleCle: boolean = false;
  cheminImageCode: string = 'assets/chateau/indices/codePorte.png';
  cheminImageCle: string = 'assets/chateau/objets/cle.png';
  codePorteZoneTextVisible: boolean = false;

  tonneau(): void {
    this.imageVisibleCode = !this.imageVisibleCode;
  }

  fenetre(): void {
    this.imageVisibleCle = !this.imageVisibleCle;
  }

  skull(): void {
    this.codePorteZoneTextVisible = !this.codePorteZoneTextVisible;
  }

  porte(): void {
    this.chateauImage = 'assets/chateau/mapchateauPorteOuverte.png';
  }

  lave(): void {
    this.chateauImage = 'assets/chateau/mapchateau.png';
  }

}
