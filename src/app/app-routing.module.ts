import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: '' , component : AuthComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
