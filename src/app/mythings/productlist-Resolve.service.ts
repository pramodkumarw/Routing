import { Injectable } from "@angular/core";
import { Resolve,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import  "rxjs/add/operator/map";

@Injectable()
export class ProdcutListResolve implements Resolve<IUser>{
    constructor(readonly http:Http){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<IUser> {
       return   this.http.get("http://localhost:52831/api/values").map((item,index)=>{
            return item.json();
         });
    } 
}
 
export interface IUser{
    id:number;
    name:string;
    desc:string;  
}