import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{

    currentUser:IUserDetail;
    isLoggedIn():boolean{
        return !!this.currentUser;
    }

    login(){
        this.currentUser={id:2,username:"ajay",password:"ajay12345"};
    }
}



export class IUserDetail{
    id:number;
    username:string;
    password:string;
}