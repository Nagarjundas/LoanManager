import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LogInModule } from './log-in/log-in.module';
import { SignInModule } from './sign-in/sign-in.module';
import { AppComponent } from './app.component';
import { FunComponent } from './fun/fun.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FunComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,LogInModule ,SignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
