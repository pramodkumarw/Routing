import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {DataService  } from "../mythings/data.service";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {


id;
product=null;
  constructor(private route:ActivatedRoute,private dataservice:DataService) {
    this.id=this.route.snapshot.params["id"];
    }

  ngOnInit(){
   this.product=this.dataservice.getdatabyID(this.id);
  }

}
