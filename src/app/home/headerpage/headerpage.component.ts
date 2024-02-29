import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-headerpage',
  standalone: true,
  imports: [],
  templateUrl: './headerpage.component.html',
  styleUrl: './headerpage.component.scss'
})
export class HeaderpageComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        routerLink: '/contact'
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        routerLink: '/users'
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-phone',
        routerLink: '/contact'
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: '/login'
      }
    ];


  }
}
