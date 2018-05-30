import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { DataService } from "../mythings/data.service";
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styles: []
})
export class ProductEditComponent implements OnInit {

  id;
 
  product=null;
    constructor(private route:ActivatedRoute,private dataservice:DataService,readonly nav:Router) {
      this.id=this.route.snapshot.params["id"];
      }
  
    ngOnInit(){
    
     this.product=this.dataservice.getdatabyID(this.id);
    }

    updateData(){
      this.dataservice.getdatabyID(this.id).id=this.product.id;
      this.dataservice.getdatabyID(this.id).name=this.product.name;
      this.dataservice.getdatabyID(this.id).desc=this.product.desc;
      this.nav.navigate(['/products']);

    }



}
