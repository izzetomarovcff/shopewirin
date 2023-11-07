import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NullComponent } from './null/null.component';


const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'home', component: HomeComponent },  
  { path: 'null', component: NullComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
