import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginData } from '../models/login-data';
import { loginResponse } from '../models/loginResponse';
import { RegisterData } from '../models/register-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
   }

  login(loginData:LoginData): Observable<loginResponse>{
    return this.http.post<loginResponse>(environment.endpoints.login, loginData, {headers: this.httpHeaders})
  }

  register(registerData:RegisterData): Observable<{message: string}>{
    return this.http.post<{message: string}>(environment.endpoints.register,registerData,{headers: this.httpHeaders})
  }
}
