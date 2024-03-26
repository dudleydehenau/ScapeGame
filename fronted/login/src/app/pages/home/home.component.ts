import { Component } from '@angular/core';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {CarouselComponent} from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    CarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
