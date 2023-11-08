import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthenticationModule { }
