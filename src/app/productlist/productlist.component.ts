import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute} from "@angular/router";
import { DataService,IProduct } from "../mythings/data.service";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  constructor(readonly route:Router,private dataservice:DataService,readonly activaRoute:ActivatedRoute) {
    this.products=this.activaRoute.snapshot.data.products;
   }
 products;

  ngOnInit(){
    console.log(this.products);
  }
  navigateAbout(){
    this.route.navigate(["/about"],{queryParams:{name:'ajay',city:'kanpur',id:33}});;

  }
}
