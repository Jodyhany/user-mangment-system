import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent {
  userform=new FormGroup({
    firstName:new FormControl(null,[Validators.required,]),
    lastName:new FormControl(null,[Validators.required,]),
    email:new FormControl(null,[Validators.required,]),
    gender:new FormControl(null,[Validators.required,]),
    image:new FormControl(null,[Validators.required,]),
    userName:new FormControl(null,[Validators.required,]),
    phone:new FormControl(null,[Validators.required,]),
    birthDate:new FormControl(null,[Validators.required,]),
    age:new FormControl(null,[Validators.required,]),
  })
constructor(private _userservices:UsersService,
  private _Toastr:ToastrService
){}

sendData(data:FormGroup){
  console.log(
  data.get('firstName')?.status)
if(data.status==='INVALID'){
    this._Toastr.error('check your data','INVALID data')
} else{
  this._userservices.Adduser(data.value).subscribe({
   next:()=>{},error:(error)=>{
     this._Toastr.error(error,"something went wrong")
   },complete:()=> {
     this._Toastr.success('new user Added' ,'success')
   },
  })

}

  }
}
