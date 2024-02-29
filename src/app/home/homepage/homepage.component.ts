import { Component } from '@angular/core';
import { HeaderpageComponent } from '../headerpage/headerpage.component';
import { FooterpageComponent } from '../footerpage/footerpage.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderpageComponent, FooterpageComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}