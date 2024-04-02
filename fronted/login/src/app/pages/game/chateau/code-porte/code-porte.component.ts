import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-code-porte',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule  
  ],
  templateUrl: './code-porte.component.html',
  styleUrl: './code-porte.component.scss'
})
export class CodePorteComponent {
  codePorteText: string = '';

  envoyerCodePorte() {
    console.log('Le code :', this.codePorteText);
  }
}


