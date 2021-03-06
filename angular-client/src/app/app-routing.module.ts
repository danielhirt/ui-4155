import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'home/table', component: HomeComponent},
  { path: 'home/graph', component: HomeComponent},
  { path: 'home/heatmap', component: HomeComponent},
  { path: 'home/reports', component: HomeComponent},
  { path: 'home/list', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent},
  { path: '500', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }