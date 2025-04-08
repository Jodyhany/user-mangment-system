import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import {  Users} from './interface/users';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
constructor(private _userservies:UsersService,
  private _toaster:ToastrService,
){
}
pstart:number=1
users:Users[]=[]
 CurUser:string|any=localStorage.getItem('id')
AdminUser:any
search:string=''
userssearch:Users[]=[]
userDeleated:number=0
ngOnInit(): void {
  this.GetcurentUser()
this.getallusers()
}
comeingsoon(){
  this._toaster.info('not implemt yet','comeing soon')
}
GetcurentUser(){
  this._userservies.getAutUser().subscribe({
    next:(res)=>{
     this.AdminUser=res
    }
  })
}
DELETEuser(userid:number){
  this._userservies.userDeleate(userid).subscribe({
    next:(res)=>{
    this._toaster.success('userDeleate','success')

    this.userDeleated=res.id
    } , error:(err)=> {
      this._toaster.error(err,'error')
    }, complete:()=>{
      this._toaster.info('⚠ User has been removed from the list, but it may still exist on the server. You might see it again if the data refreshes.','note')
    }
  })

}
getallusers(){
  this._userservies.getUsers().subscribe({
    next:(res)=>{
      this.users=res.users
    }
  })
}
getuserdata(){
  this._userservies.usersearch(this.search).subscribe({
    next:(res)=>{
      this.userssearch=res.users
    }
  })
}
}
