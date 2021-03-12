import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateEmployeeComponent} from './component/create-employee/create-employee.component';
import {ListAllComponent} from './component/list-all/list-all.component';
import {UpdateEmployeeComponent} from './component/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateEmployeeComponent
  },
  {
    path: 'list',
    component: ListAllComponent
  },
  {
    path: 'update/:id',
    component: UpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
