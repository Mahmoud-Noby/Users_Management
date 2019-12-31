import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   uersUrl = 'https://api.myjson.com/bins/1bhm3k';
   constructor (private http : HttpClient) {}
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.uersUrl);
  }
}
