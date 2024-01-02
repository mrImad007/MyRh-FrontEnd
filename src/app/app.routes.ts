import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { OffersComponent } from './Views/offers/offers.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';

export const routes: Routes = [
     { path:'', component : HomeComponent,},
     { path:'offers', component : OffersComponent},
     { path: 'dashboard', component : DashboardComponent}
];
