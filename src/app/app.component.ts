import { Component, OnInit } from '@angular/core';
import {Router, Event, NavigationStart,NavigationEnd,NavigationCancel,NavigationError } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  loading:boolean=true;
  id:number=333;
  constructor(readonly route:Router) {
   }

   checkRouterEvent(routeEvent:Event):void{
  }
   
  ngOnInit() {
  }

}
