import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from './shared/shared/shared.module';
import { GloablInterceptor } from './core/interceptors/gloabl.interceptor';
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
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:GloablInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
