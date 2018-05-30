import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name :"mypipe"
})
export class mypipe implements  PipeTransform{

transform(value, a:number){
    if(a===1){
        return "jai ho bhai" ;
    }
    else
    {
        return  "wrong value" ;
    }
}
}
