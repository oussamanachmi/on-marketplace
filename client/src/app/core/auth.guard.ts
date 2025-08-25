import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean | UrlTree {
    const token = this.auth.getToken();
    if (token) {
      return true;
    }
    // redirige vers la page de connexion si non authentifié
    return this.router.createUrlTree(['/login']);
  }
}