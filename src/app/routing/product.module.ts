import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { WelcomeComponent } from "../welcome/welcome.component";
import { ProductListComponent } from "../productlist/productlist.component";
import { ProductDetailComponent } from "../productdetail/productdetail.component";
import { ProductEditComponent } from "../product-edit/product-edit.component";
import {ProductEditInfoComponent  } from "../product-edit-info/product-edit-info.component";
import { ProdcutListResolve } from "../mythings/productlist-Resolve.service";
import { AuthGuard } from "../mythings/auth-guard.guard";
 
const route:Routes=[
    { path:"products",
    children:[
        { path:"",component:ProductListComponent ,canActivate:[AuthGuard] ,resolve:{products:ProdcutListResolve} },
        { path :":id", component:ProductDetailComponent},
        { path:":id/edit",
        component:ProductEditComponent,
        children:[
                     { path :'', redirectTo : "info",pathMatch:"full" },
                     { path:"info",component:ProductEditInfoComponent }
                 ]
        }]
    }    
  ];


@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[]
})
export class ProductModule{
}