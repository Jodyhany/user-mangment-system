import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../interface/users';
@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent  implements OnInit{
  userid:number=0
  userdat:Users|any
  userform=new FormGroup({
    firstName:new FormControl(null,[Validators.required,]),
    lastName:new FormControl(null,[Validators.required,]),
    email:new FormControl(null,[Validators.required,]),
    gender:new FormControl(null,[Validators.required,]),
    image:new FormControl(null),
    userName:new FormControl(null,[Validators.required,]),
    phone:new FormControl(null,[Validators.required,]),
    birthDate:new FormControl(null,[Validators.required,]),
    age:new FormControl(null,[Validators.required,]),
  })
constructor(private _userservices:UsersService,
  private _Toastr:ToastrService,
  private _router:Router,
  private _activerout:ActivatedRoute
){}
ngOnInit(): void {
  this.userid=this._activerout.snapshot.params['id']
  if(this.userid){
    this.getuserData(this.userid)
  }
}
getuserData(id:number){
this._userservices.getuserbyid(this.userid).subscribe({
  next:(res)=>{this.userdat=res},
  error:(err)=>{this._Toastr.error(err,'error')},
  complete:()=>{
    this.userform.patchValue({
      firstName:this.userdat.firstName,
      lastName:this.userdat.lastName,
      email:this.userdat.email,
      age:this.userdat.age,
      phone:this.userdat.phone,
      birthDate:this.userdat.birthDate,
      image:this.userdat.image,
    })
  }
});

}
Adduser(data:FormGroup){
  if(data.status==='INVALID'){
       this._Toastr.error('check your data','INVALID data') }
       else{
  this._userservices.Adduser(data.value).subscribe({
    next:(res)=>{},error:(error)=>{
      this._Toastr.error(error,"something went wrong")
    },complete:()=> {
      this._Toastr.success('new user Added' ,'success')
      data.reset({disabled:true})
    },
    
   })}
}
UpdateUser(id:number,data:FormGroup){
  this._userservices.UpdateUser(this.userid,data.value).subscribe({
    next:(res)=>{},error:(error)=>{
      this._Toastr.error(error,"something went wrong")
    },complete:()=> {
      this._Toastr.success(' user Updated' ,'success')
      this._router.navigate(['/home/users'])
      
    },
    
   })
}
sendData(data:FormGroup){
if(this.userid){
  this.UpdateUser(this.userid,this.userform)
}  else{this.Adduser(this.userform)}

}}
