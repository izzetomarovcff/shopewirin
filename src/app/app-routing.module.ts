import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { LikedComponent } from './pages/liked/liked.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '' , component : AuthComponent },
  { path: 'home' , component : HomeComponent },
  { path: 'liked' , component : LikedComponent },
  { path: 'cart' , component : CartComponent },
  { path: 'category' , component : CategoryComponent },
  { path: 'products' , component : ProductsComponent },
  { path: 'orders' , component : OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
