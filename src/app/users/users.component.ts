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
){}
pstart:number=1
users:Users[]=[]
fristusers:|any
search:string=''
userssearch:Users[]=[]
ngOnInit(): void {
this.getallusers()
this.getusersearch()
}
DELETEuser(userid:number){
  console.log(userid)
  this._userservies.userDeleate(userid).subscribe({
    next:(res)=>{console.log(res)
    this._toaster.success('userDeleate','success')
    } , error:(err)=> {
      this._toaster.error(err,'error')
    }, complete:()=>{
      this._toaster.info('⚠ User has been removed from the list, but it may still exist on the server. You might see it again if the data refreshes.','note')
    }
  })

}
getusersearch(){
  this._userservies.usersearch(this.search).subscribe({next:(res)=>{}})
  this._userservies.getuser().subscribe({
    next:(res)=>{
     this.fristusers=res
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
