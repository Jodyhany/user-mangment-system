import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) {
   }
   onloging(data:FormGroup):Observable<any>{
    return this._http.post('https://dummyjson.com/auth/login',data)
   }
}
