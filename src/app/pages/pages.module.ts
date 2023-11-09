import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LikedComponent } from './liked/liked.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    HomeComponent,
    LikedComponent,
    CartComponent,
    OrdersComponent,
    CategoryComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    CartComponent,
    LikedComponent,
    OrdersComponent
  ]
})
export class PagesModule { }
