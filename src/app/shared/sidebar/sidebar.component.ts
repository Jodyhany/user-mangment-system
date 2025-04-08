import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnDestroy, OnInit {
  constructor(
    private _toaster: ToastrService,
    private _router: Router,
    private _userservices: UsersService
  ) {}
   fullname:string=''
   id:number=0
  logoutsure=false
  role:string=''
  ngOnInit(): void {
    this._userservices.getAutUser().subscribe({
      next: (res) => {
        this.fullname = `${res.firstName} ${res.lastName}`;
        this.role=res.role
        this.id=res.id
      },
    });
  }
  ngOnDestroy(): void {
    this.logout();
  }
  logout() {
    this._router.navigate(['/login']);
    localStorage.removeItem('token');
  }
}
