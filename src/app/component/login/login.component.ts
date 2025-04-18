import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servcies/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent    {
  isHide:Boolean=true;
  usernamereq:boolean=false
  userminlenght:boolean=false
  passreq:boolean=false
  passlengthmax:boolean=true
  passlengthmin:boolean=false
  loginform=new FormGroup({
    username:new FormControl(null,[
      Validators.required,
      Validators.minLength(6)
    ]),
      password:new FormControl(null,[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  })
  constructor(private _auth:AuthService,private _toaster:ToastrService,private _router:Router){}
  checkusername(data:FormGroup){
    data.get('username')?.errors?.['required']?this.usernamereq=false:this.usernamereq=true
    data.get('username')?.errors?.['minlength']==undefined?this.userminlenght=true:this.userminlenght=false
    }
  checkpassword(data:FormGroup){
    data.get('password')?.errors?.['required']?this.passreq=false:this.passreq=true
    data.get('password')?.errors?.['minlength']==undefined?this.passlengthmin=true:this.passlengthmin=false
    data.get('password')?.errors?.['maxlength']==undefined?this.passlengthmax=true:this.passlengthmax=false
  }
formvalid(data:FormGroup){
  this.checkusername(data)
  this.checkpassword(data)
  this._auth.onloging(data.value).subscribe({
    next:(res)=>{
      localStorage.setItem('token',res.accessToken)
      this._toaster.success(`welcome back ${res.firstName} ${res.lastName}`,'login suceessfully')
    },error:(err)=>{
      this._toaster.error('not found this account please try the default account or click info',err.error.message,)
    },complete:()=>{
      this._router.navigate(['/home'])
    }
  })
}
}