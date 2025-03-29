import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/users/interface/users';
import { UsersService } from 'src/app/users/services/users.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    tablefullwitdh:boolean=false
    search:string=''
    usersearch:Users[]|any
    constructor(
      private _router:Router,
      private _userservices:UsersService,
    ){
    }
    data(){
      // this._router.navigate(['/home/users/search'])
      this._userservices.usersearch(this.search).subscribe({
        next:(res)=>{console.log(res.users)
          this.usersearch=res.users
        }
      })
      console.log(this.search)
    }
}
