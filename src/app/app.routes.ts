import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { OffersComponent } from './Views/offers/offers.component';
import { DashboardComponent } from './Views/dashboard/company/dashboard.component';
import { AuthComponent } from './Views/auth/company/auth.component';
import { DetailsComponent } from './Views/details/details.component';
import { ApplicantComponent } from './Views/auth/applicant/applicant.component';
import { ApplicantDashboard } from './Views/dashboard/applicant/applicant.component';
import { AdminAuthComponent } from './Views/auth/admin/admin.component';
import { AdminDashboardComponent } from './Views/dashboard/admin/admin.component';
export const routes: Routes = [
     { path:'', component : HomeComponent,},
     { path:'offers', component : OffersComponent},
     { path: 'dashboard', component : DashboardComponent},
     { path: 'companyAuth', component : AuthComponent},
     { path: 'details', component : DetailsComponent},
     { path : 'applicantAuth', component : ApplicantComponent },
     { path : 'applicantDashboard' , component: ApplicantDashboard },
     { path : 'adminAuth', component: AdminAuthComponent },
     { path : 'adminDashboard', component: AdminDashboardComponent }
];
