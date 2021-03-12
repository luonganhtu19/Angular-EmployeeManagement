import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListAllComponent} from './component/list-all/list-all.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {CreateEmployeeComponent} from './component/create-employee/create-employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { PositionComponent } from './component-position/position/position.component';
import { OfficeComponent } from './component-office/office/office.component';


// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    PositionComponent,
    OfficesComponent,
    OfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
