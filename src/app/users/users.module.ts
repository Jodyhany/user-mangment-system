import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
const routes:Routes=[
  {path:'',component:UsersComponent,title:'USERS'}
]
@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
