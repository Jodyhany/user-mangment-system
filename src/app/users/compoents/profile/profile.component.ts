import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  userid:number= this._activeroute.snapshot.params['id']
  userInfo:any
  disabledinput:boolean=false
  showinfo:FormGroup=new FormGroup({
    firstName:new FormControl(null),
    lastName:new FormControl(null),
    email:new FormControl(null),
    age:new FormControl(null),
    phone:new FormControl(null),
    birthDate:new FormControl(null),
  })
    constructor(
      private _activeroute:ActivatedRoute,
      private _userservices:UsersService,
    ){}
    ngOnInit(): void {
        this.showinfo.disable();
        this.showInfo()
    }
    showInfo(){
      this._userservices.getAutUser().subscribe({
        next:(res)=>{
          this.showinfo.patchValue({
              firstName:res.firstName,
              lastName:res.lastName,
              age:res.age,
              phone:res.phone,
              birthDate:res.birthDate,
            email:res.email,
            })
        } , error:(err)=>{console.log(`aut error ${err}`)}
      })
    } 
}
