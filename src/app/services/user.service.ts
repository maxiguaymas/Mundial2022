import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzVmMTJiNGY3NmRmYWYyODZlMjA2ZGMiLCJpYXQiOjE2NjcxNzU0MTIsImV4cCI6MTY2ODAzOTQxMn0.cQxyY0KbYfmumwLqxJ7xhQXNFgpv7GKtoiZJ9D3cxcU' });

  constructor(private http: HttpClient) { }

  getAlbum(email:string){
    return this.http.get(`http://localhost:5000/api/album-user/${email}`, {headers: this.httpHeaders});
  }
}
