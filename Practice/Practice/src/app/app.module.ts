import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { TaskComponent } from './task/task.component';
import { StylesExampleComponent } from './styles-example/styles-example.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { IfElseExampleComponent } from './if-else-example/if-else-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { ForloopExampleComponent } from './forloop-example/forloop-example.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';

import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { ServicesExampleComponent } from './services-example/services-example.component';
import { HttpClient } from 'selenium-webdriver/http';
import { JsonComponent } from './json/json.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { FormExampleComponent } from './form-example/form-example.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ButtonExampleComponent,
    TaskComponent,
    StylesExampleComponent,
    ClassBindingComponent,
    IfExampleComponent,
    IfElseExampleComponent,
    SwitchExampleComponent,
    ForloopExampleComponent,
    PipeExampleComponent,
   
    EmployeeDataComponent,
   
    ServicesExampleComponent,
   
    JsonComponent,
   
    EmployeeListComponent,
   
    DepartmentListComponent,
   
    PageNotFoundComponent,
   
    DepartmentDetailsComponent,
    routingComponents,
    FormExampleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
