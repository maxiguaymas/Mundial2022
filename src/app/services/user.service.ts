import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpHeaders: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) { }

  getAlbum(email:string): Observable<any>{
    const token: string = localStorage.getItem('token')!;
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer '+ token });
    return this.http.get(environment.endpoints.user.concat(email), {headers: this.httpHeaders});
  }

  createAlbum(email:string): Observable<any>{
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(environment.endpoints.user.concat(email), {headers: this.httpHeaders});
  }

  updateAlbum(album: Album): Observable<any>{
    const email: string = localStorage.getItem('email')!;
    const token: string = localStorage.getItem('token')!;
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer '+ token });
    // return this.http.put('http://localhost:5000/api/album-user/'.concat(email),{album} ,{headers: this.httpHeaders});

    return this.http.put(environment.endpoints.user.concat(email),{album} ,{headers: this.httpHeaders});
  }
}
