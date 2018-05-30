import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { WelcomeComponent } from "../app/welcome/welcome.component";
import { ProductListComponent } from "../app/productlist/productlist.component";
import { ProductDetailComponent } from "../app/productdetail/productdetail.component";
import { NotfoundComponent } from "../app/notfound/notfound.component";
import { AboutguardGuard } from './aboutguard.guard';
import { HttpModule  } from "@angular/http";
 import { AppRoutingModule } from "./routing/appRouting.module";
import { DataService } from "./mythings/data.service";
import { ProductEditComponent } from "../app/product-edit/product-edit.component";
import {ProductEditInfoComponent  } from "../app/product-edit-info/product-edit-info.component";
import { ProdcutListResolve } from "./mythings/productlist-Resolve.service";
import { AuthService } from "./mythings/auth.service";
import {  AuthGuard} from "./mythings/auth-guard.guard";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    NotfoundComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
   ,AppRoutingModule
  ],
  providers: [ProdcutListResolve,DataService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
 }



