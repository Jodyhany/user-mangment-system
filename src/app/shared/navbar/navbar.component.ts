import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    tablefullwitdh:boolean=false
    constructor(){
    console.log  (localStorage.getItem('token'))
    }
}
