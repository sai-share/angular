import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { auditcomponent } from './audit/audit.component';
import { homecomponent } from './home/home.component';
import { logoutcomponent } from './logout/logout.component';
import { parameterscomponent } from './parameters/parameters.component';

const appRoute: Routes = [
  {path: '',component: homecomponent},
  {path: 'HOME',component: homecomponent},
  {path: 'AUDIT',component: auditcomponent},
  {path: 'PARAMETERS',component: parameterscomponent},
  {path: 'LOGOUT',component: logoutcomponent}
]



@NgModule({
  declarations: [
    AppComponent,
    auditcomponent,
    homecomponent,
    logoutcomponent,
    parameterscomponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
