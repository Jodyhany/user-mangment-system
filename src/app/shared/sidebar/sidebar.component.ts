import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private _toaster:ToastrService,private _router:Router){}
  fristname:string|any=localStorage.getItem('fName')
  lastname:string|any=localStorage.getItem('lName')
  fullname:string|any=`${this.fristname} ${this.lastname}`
  gender:string|any=localStorage.getItem('gender')
  image:string|any=localStorage.getItem('img')
  username:string|any=localStorage.getItem('username')
  email:string|any=localStorage.getItem('email')

  logoutsure:boolean=false
  logout(){
    this._toaster.error('you have been logout',"logout")
    this._router.navigate(['/login']); 
    localStorage.removeItem('token')
    localStorage.removeItem('token')
    localStorage.removeItem('fName')
    localStorage.removeItem('lName')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('gender')
    localStorage.removeItem('img')
  }
}
