import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http'
import { Observable } from 'rxjs';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servcies/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient){}
  Adduser(data:FormGroup):Observable<any>{
   return this._http.post(`https://dummyjson.com/users/add`,data)
  }
  UpdateUser(id:number,data:FormGroup):Observable<any>{
   return this._http.put(`https://dummyjson.com/users/${id}`,data)
  }
    usersearch(search:string):Observable<any>{
    return this._http.get(`https://dummyjson.com/users/search?q=${search}`)
  }
  getUsers():Observable<any>{
    return this._http.get('https://dummyjson.com/users')
  }
  getuser():Observable<any>{
    return this._http.get('https://dummyjson.com/users/1')
  }
  getuserbyid(id:number):Observable<any>{
    return this._http.get(`https://dummyjson.com/users/${id}`)
  }
  userDeleate(id:number):Observable<any>{
    return this._http.delete(`https://dummyjson.com/users/${id}`)
  }
  }
