import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { WelcomeComponent } from "../welcome/welcome.component";
import { ProductListComponent } from "../productlist/productlist.component";
import { ProductDetailComponent } from "../productdetail/productdetail.component";
import { NotfoundComponent } from "../notfound/notfound.component";
import { AboutguardGuard } from '../aboutguard.guard';
import { ProductEditComponent } from "../product-edit/product-edit.component";
import {ProductEditInfoComponent  } from "../product-edit-info/product-edit-info.component";
import { ProductModule  } from "./product.module";
import { LoginComponent } from "../login/login.component";


const route:Routes=[
    { path:"",redirectTo:"welcome" ,pathMatch:"full"},
    { path:"welcome",component:WelcomeComponent ,data:{pageTitle:'Testing !!'}},
    {path:"login",component:LoginComponent},
    { path:"**", component:NotfoundComponent}
  ];


@NgModule({
    imports:[RouterModule.forRoot(route),
        ProductModule   
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{
}