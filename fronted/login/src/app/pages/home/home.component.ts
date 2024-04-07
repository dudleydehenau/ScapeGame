import { Component, ViewChild } from '@angular/core';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {CarouselComponent} from "../carousel/carousel.component";
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    CarouselComponent,
    SearchBarComponent,
    SidenavComponent,
    MatSidenavModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
