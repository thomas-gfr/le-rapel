import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public items: MenuItem[] = [
        {
            label: 'Accueil',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/home']
        },
        {
            label: 'Sorties',
            icon: 'pi pi-fw pi-calendar',
            routerLink: ['/sorties']
        },
        {
            label: 'Concerts',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/concerts']
        },
        {
            label: 'Artistes',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/artistes']
        },
        {
            label: 'Feed',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/feed']
        },
        {
            label: 'Mon compte',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/mon-compte']
        }

    ]

    constructor() { }

    ngOnInit(): void {
    }

}
