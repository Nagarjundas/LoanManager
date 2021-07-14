import { FunComponent } from './fun/fun.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'fun', component: FunComponent },
  { path: 'home', component: HomeComponent },
  { path: 'logIn', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule) },
  { path: 'signIn', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
