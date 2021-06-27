import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{testComponent} from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { MaxLengthPipe } from './max-length.pipe';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    AppComponent,testComponent, Test2Component, StudentsComponent, FormComponent, MaxLengthPipe, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
