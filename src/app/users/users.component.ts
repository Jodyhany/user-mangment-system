import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import {  Users,  } from './interface/users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
constructor(private _userservies:UsersService){}
pstart:number=1
users:Users[]=[]
fristusers:|any
search:string='Michael '
ngOnInit(): void {
this._userservies.usersearch(this.search).subscribe({next:(res)=>{console.log(res)}})
  this._userservies.getuser().subscribe({
    next:(res)=>{
     this.fristusers=res
      }
  })
  this._userservies.getUsers().subscribe({
    next:(res)=>{
      this.users=res.users
      console.log(this.users)
    }
  })
}
}
