import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:8645/api/v1';

  constructor(private http:HttpClient) { }

  login(email:string, password:string) {
    return this.http.post(`${this.API_URL}/login`, {email, password})
     .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage
  }
}
