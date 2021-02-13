import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard1 implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }


  canActivate(route, state: RouterStateSnapshot){
    if(!this.authService.getUser()["is_admin"] && this.authService.getUser()) return true;
    this.router.navigate(['/login']);
    return false;
}
}
