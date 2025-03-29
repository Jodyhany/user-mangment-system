import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { AddeditComponent } from './compoents/addedit/addedit.component';
import { ProfileComponent } from './compoents/profile/profile.component';

const routes:Routes=[
  {path:'',component:UsersComponent,title:'show users'},
  {path:'add',component:AddeditComponent,title:'add user'},
  {path:'edit/:id',component:AddeditComponent,title:'add user'},
  {path:'profile/:id',component:ProfileComponent,title:'show info'},
]
@NgModule({
  declarations: [
    UsersComponent,
    AddeditComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
