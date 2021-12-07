import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '@app/pages/auth/auth.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authSvc: AuthService, private router: Router){}
  
  canActivate(): Observable<boolean>{
    return this.authSvc.isLogged.pipe(
      map((isLogged)=>{
        if (isLogged) {
          return true;
        } else {
          this.router.navigate(['/login']);
        }
        return false;
    }))
  }
  
}
