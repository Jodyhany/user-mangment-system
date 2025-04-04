import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from './shared/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
HomeComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({closeButton:true,
    }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
