import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzZhYjZjMjViZjQ5YjE4ZjUzZDQ4OWMiLCJpYXQiOjE2Njc5MzgxNzYsImV4cCI6MTY2ODgwMjE3Nn0.RT7z1lm7_bnYj1PlI-viUSzEHSIndXbot1tmWeEHMZE' });

  constructor(private http: HttpClient) { }

  getAlbum(email:string): Observable<any>{
    return this.http.get<any>(`https://app-mundial-2022.herokuapp.com/api/album-user/${email}`, {headers: this.httpHeaders});
  }


  // getAlbum(email:string): Observable<any>{
  //   return this.http.get<any>(`http://localhost:5000/api/album-user/${email}`, {headers: this.httpHeaders});
  // }
}
