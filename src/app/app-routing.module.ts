import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { WelcomeComponent } from "./visual/welcome/welcome.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { OrdersComponent } from "./books/orders/orders.component";
import { ProfileComponent } from "./auth/profile/profile.component";
import { ActiveUserComponent } from "./auth/active-user/active-user.component";
import { ProductsComponent } from "./books/products/products.component";
import { CartComponent } from "./books/cart/cart.component";
import { ViewProductsComponent } from "./books/view-products/view-products.component";
import { OrderConfirmComponent } from "./books/order-confirm/order-confirm.component";
import { ReviewsComponent } from "./books/reviews/reviews.component";
import { LogoutComponent } from "./auth/logout/logout.component";

const rute: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'orders', component: OrdersComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'active', component: ActiveUserComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'cart', component: CartComponent},
    { path:'view/product/:id/:bookData', component: ViewProductsComponent},
    { path: 'order-confirm', component: OrderConfirmComponent},
    { path: 'reviews', component: ReviewsComponent},
    { path: 'logout', component: LogoutComponent}

];


@NgModule ({
    
    imports: [
        RouterModule.forRoot(rute)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule {}