import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormField} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import {MatButton} from "@angular/material/button";
import {CommentaireComponent} from "../../commentaire/commentaire.component";
import {CommentaireService} from "../../../services/commentaire.service";
import {AuthService} from "../../../services/auth.service";
import {User} from "../../../models/User";
import {Commentaire} from "../../../models/Commentaire";
import {MatCard} from "@angular/material/card";
import {NgForOf,CommonModule} from "@angular/common";





@Component({
  selector: 'app-chambre',
  standalone: true,
  imports: [MatGridListModule, MatFormField, FormsModule, MatInputModule, MatButton, ReactiveFormsModule, CommentaireComponent, MatCard, NgForOf,CommonModule],
  templateUrl: './chambre.component.html',
  styleUrl: './chambre.component.scss'
})
export class ChambreComponent implements OnInit{
    commentaire$!: Observable<Commentaire[]>;
    userId!: Pick<User,"id">;
    constructor(private commentaireService : CommentaireService, private authService : AuthService) { }

    ngOnInit(): void {
      this.commentaire$ = this.fetchAll();
      this.userId = this.authService.userId;
    }
    fetchAll(): Observable<Commentaire[]>{
      return this.commentaireService.fetchAll();
    }

    createComment() {
      this.commentaire$ = this.fetchAll();
    }
}
