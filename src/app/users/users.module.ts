import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { AddeditComponent } from './compoents/addedit/addedit.component';
const routes:Routes=[
  {path:'',component:UsersComponent,title:'show users'},
  {path:'add',component:AddeditComponent,title:'edit user'},
]
@NgModule({
  declarations: [
    UsersComponent,
    AddeditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
