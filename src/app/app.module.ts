import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { SummaryPipe } from './summary.pipe';
//import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminfundComponent } from './admin/adminfund/adminfund.component';
import { AdminpromotionComponent } from './admin/adminpromotion/adminpromotion.component';
import { FundaccountComponent } from './fundaccount/fundaccount.component';
import { HomeComponent } from './home/home.component';
import { AdmintransactionsComponent } from './admin/admintransactions/admintransactions.component';
import { HttpClientModule } from '@angular/common/http';
import { NoAccessComponent } from './no-access/no-access.component';
//import { JwtInterceptor} from '_helpers';
import { JwtModule } from "@auth0/angular-jwt";
import { ViewAccountComponent } from './admin/view-account/view-account.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    AdmindashboardComponent,
    AdminfundComponent,
    AdminpromotionComponent,
    FundaccountComponent,
    HomeComponent,
    AdmintransactionsComponent,
    NoAccessComponent,
    ViewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:3000/apiv1/"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [
    AuthService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
