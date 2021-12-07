import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserResponse } from 'src/app/shared/models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void>{
    return this.http
      .post<UserResponse>(`${environment.API_USERS_URL}`, authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveToken(res.token);
          this.loggedIn.next(true);
          this.router.navigate(['']);
          return res;
        }),
        catchError((err)=> this.handlerError(err))
      );
  }

  logout(): void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
  
  private checkToken(): void{
    const userToken = localStorage.getItem('token');
  }

  private saveToken(token: string): void{
    localStorage.setItem('token', token);
  }
  
  private handlerError(err: Error): Observable<never>{
    let errorMessage = 'An error occurred retrieving data';
    if (err){
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
