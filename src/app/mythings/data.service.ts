import { Injectable } from "@angular/core";

@Injectable()
export class DataService
{
    products=[
        {id:2,name:"hammer",desc:"thor hu mai"},
        {id:3,name:"iron",desc:"iron man hu mai"},
        {id:4,name:"caption",desc:"caption america hu mai"}
    ];

    getData(){       
        return this.products;
    }

    getdatabyID(id:number){
       return   this.products.find(function(item){
             if(item.id==id){
                 return true;
             }
             return false;
         });         
    }

    updateData(product:IProduct){
        
    }
   
  
}

export interface IProduct{
    id :number,
    name :string;
    desc:string;
}

