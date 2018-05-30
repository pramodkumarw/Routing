import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AboutguardGuard implements CanActivate {
  constructor(private route:Router){}


  canActivate():boolean{
    return true;
  }
  
 
}
