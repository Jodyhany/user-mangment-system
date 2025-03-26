import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }
    usersearch(search:string):Observable<any>{
    return this._http.get(`https://dummyjson.com/users/search?q=${search}`)
  }
  getUsers():Observable<any>{
    return this._http.get('https://dummyjson.com/users')
  }
  getuser():Observable<any>{
    return this._http.get('https://dummyjson.com/users/1')
  }
}
