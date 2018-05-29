import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import {UserFormComponent} from '../app/users/component/user-form/user-form.component';
import {UserListComponent} from '../app/users/component/user-list/user-list.component';
import {StudentDataService} from '../app/users/service/student-data.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    ChartModule
  ],
  providers: [StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
