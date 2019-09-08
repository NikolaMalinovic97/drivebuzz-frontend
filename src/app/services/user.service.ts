import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/user-api/users';
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});

  constructor(private http: HttpClient) { }

  validateUser(username: String, password: String) {
    return this.http.post(this.url + '/validate', {username: username, password: password}, {headers: this.headers});
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id, {headers: this.headers});
  }
}