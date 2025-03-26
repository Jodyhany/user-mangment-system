import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private _toaster:ToastrService,private _router:Router){}
  logoutsure:boolean=false
  logout(){
    this._toaster.error('you have been logout',"logout")
    this._router.navigate(['/login']); 
    localStorage.removeItem('token')
  }
}
