import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:8645/api/v1';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post(`${this.API_URL}/login`, { email, password })
      .pipe(catchError(this.handleError));
  }

  register(userData: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return this.http
      .post(`${this.API_URL}/register`, userData)
      .pipe(catchError(this.handleError));
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'an unknown error occurred';
    if (error.error && error.error.error) {
      errorMessage = error.error.error;
    } else if (error.status === 0) {
      errorMessage = 'No connection to server';
    }
    return throwError(() => new Error(errorMessage));
  }
}
