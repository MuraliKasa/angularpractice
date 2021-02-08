import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';


const routes: Routes = [
  {path:'' ,redirectTo:'/departments',pathMatch:'full'},
  {path:'department' , component: DepartmentListComponent},
  {path:'department/:id',component:DepartmentDetailsComponent},
  {path:'employee',component:EmployeeListComponent },
  {path:'**',component:PageNotFoundComponent}
];
export const routingComponents = [
  DepartmentListComponent,
  PageNotFoundComponent,
  EmployeeListComponent,
  DepartmentDetailsComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
