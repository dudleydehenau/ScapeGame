import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-fin',
  standalone: true,
  imports: [],
  templateUrl: './score-fin.component.html',
  styleUrl: './score-fin.component.scss'
})
export class ScoreFinComponent {

  @Input()
  totalScore!: number;

  

}
