import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightDirective } from "./directive/highlight.directive";
import { DecoratorPipe } from "./pipes/decorator.pipe";
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [AppComponent, HighlightDirective, DecoratorPipe, EmployeeListComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
