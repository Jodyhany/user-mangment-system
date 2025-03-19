import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servcies/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent    {
  isHide:Boolean=true;
  usernamereq:boolean=false
  passreq:boolean=false
  passlengthmax:boolean=true
  passlengthmin:boolean=false
  loginform=new FormGroup({
    username:new FormControl(null,[
      Validators.required,
    ]),
      password:new FormControl(null,[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  })
  constructor(private _auth:AuthService){
  
  }
  checkusername(data:FormGroup){
    data.get('username')?.errors?.['required']?this.usernamereq=false:this.usernamereq=true
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
    next:(res)=>{console.log(res)}
  })
}
}
// emilys
// emilyspass