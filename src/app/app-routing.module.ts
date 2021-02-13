import { AuthGuard } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdmintransactionsComponent } from './admin/admintransactions/admintransactions.component';
import { ViewAccountComponent } from './admin/view-account/view-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundaccountComponent } from './fundaccount/fundaccount.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard1 } from './auth-guard1.service';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'account', component:  FundaccountComponent, canActivate:[AuthGuard1] },
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard1] },
  {path: 'admin/dashboard', component: AdmindashboardComponent, canActivate:[AuthGuard] },
  {path: 'admin/viewaccount/:id', component: ViewAccountComponent, canActivate:[AuthGuard] },
  {path: 'admin/transactions', component:   AdmintransactionsComponent, canActivate:[AuthGuard] },
  {path: 'no-acceess', component: NoAccessComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
