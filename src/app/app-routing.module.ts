import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdmintransactionsComponent } from './admin/admintransactions/admintransactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundaccountComponent } from './fundaccount/fundaccount.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'account', component:  FundaccountComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'admin/dashboard', component: AdmindashboardComponent },
  {path: 'admin/transactions', component:   AdmintransactionsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
