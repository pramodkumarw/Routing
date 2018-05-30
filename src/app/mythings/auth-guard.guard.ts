import {Injectable  } from "@angular/core";
import { ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate,Router } from "@angular/router";
import {  AuthService} from "../mythings/auth.service";

@Injectable()
export class AuthGuard  implements CanActivate {

  constructor(private auth:AuthService,private router:Router){}

  canActivate(route :ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean{

    let ischeck:boolean=this.auth.isLoggedIn();
    if(ischeck){
    return ischeck;
    }
    else{
      this.router.navigate(['login']);
      alert("please login first to accesss")
    }
    

  }

}