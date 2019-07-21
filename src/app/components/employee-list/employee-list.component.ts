import { Component, OnInit } from "@angular/core";
import { DeleteServiceService } from "src/app/service/delete-service.service";
import { HttpClient } from "@angular/common/http";
import { EmployeeServiceService } from "src/app/api/employee.service";
import { IEmployeeDTO } from "src/app/api/employee.dto";
import { EmployeeModel } from "src/app/model/EmployeeModel";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  deleteService: DeleteServiceService;
  employees: Array<EmployeeModel> = [];

  constructor(
    deleteService: DeleteServiceService,
    public employeeService: EmployeeServiceService
  ) {
    this.deleteService = deleteService;
  }

  refreshEmployees() {
    this.employeeService
      .getEmployees()
      .subscribe((employeeDtos: Array<IEmployeeDTO>) => {
        this.employees = employeeDtos.map(empDto => {
          return EmployeeModel.fromDTO(empDto);
        });
      });
  }

  ngOnInit() {
    this.refreshEmployees();

    // console.log(
    //   "Observables",
    //   this.http.get("http://localhost:8081/getEmployees")
    // );
  }

  deleteEmployee(key: number) {
    // console.log("deleteEmployee111111", key);
    // const item = this.employees.find(item1 => {
    //   return item1.key === key;
    // });
    // this.employees.splice(this.employees.indexOf(item), 1);
    // return;
    // this.deleteService.deleteFromList(this.employees, key);
    this.employeeService
      .deleteEmployee(key)
      .subscribe((employeeDtos: Array<IEmployeeDTO>) => {
        this.employees = employeeDtos.map(empDto => {
          return EmployeeModel.fromDTO(empDto);
        });
      });
  }
}
