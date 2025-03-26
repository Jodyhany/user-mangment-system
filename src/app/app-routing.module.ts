import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { authGuard } from './core/guards/auth.guard';
const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LoginComponent,title:"log in"},
  {path:'home',component:HomeComponent,title:"HOME",canActivate:[authGuard],children:[
    {path:'',redirectTo:"users",pathMatch:"full"},
    { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
