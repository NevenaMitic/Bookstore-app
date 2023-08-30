import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './visual/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './books/orders/orders.component';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { ActiveUserComponent } from './auth/active-user/active-user.component';
import { ProductsComponent } from './books/products/products.component';
import { CartComponent } from './books/cart/cart.component';
import { ViewProductsComponent } from './books/view-products/view-products.component';
import { HeaderComponent } from './visual/header/header.component';
import { FooterComponent } from './visual/footer/footer.component';
import { BannerComponent } from './visual/banner/banner.component';
import { BannerUserComponent } from './visual/banner-user/banner-user.component';
import { Header2Component } from './visual/header2/header2.component';
import { OrderConfirmComponent } from './books/order-confirm/order-confirm.component';
import { ProductService } from './books/services/product.service';
import { ReviewsComponent } from './books/reviews/reviews.component';
import { LogoutComponent } from './auth/logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    WelcomeComponent,
    LoginComponent,
    OrdersComponent,
    ProfileComponent,
    ActiveUserComponent,
    ProductsComponent,
    CartComponent,
    HeaderComponent,
    ViewProductsComponent,
    FooterComponent,
    BannerComponent,
    BannerUserComponent,
    Header2Component,
    OrderConfirmComponent,
    ReviewsComponent,
    LogoutComponent
    
    


  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  
  providers: [ UserService, ProductService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }