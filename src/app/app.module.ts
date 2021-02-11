import { AuthService } from './auth.service';
import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses-component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
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


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
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
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CoursesService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
