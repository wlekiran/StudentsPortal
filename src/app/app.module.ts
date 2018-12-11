import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ForgorPasswordComponent } from './forgor-password.component';
import { LoginComponent } from './login.component';
import { StudenthomeComponent } from './Students/studenthome.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgorPasswordComponent,
    LoginComponent,
    StudenthomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'forgotpassword', component: ForgorPasswordComponent},
      {path: 'studenthome', component: StudenthomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
