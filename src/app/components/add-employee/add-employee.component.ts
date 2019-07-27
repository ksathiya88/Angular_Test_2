import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { EmployeeModel } from "src/app/model/EmployeeModel";
import { EmployeeServiceService } from "src/app/api/employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"]
})
export class AddEmployeeComponent implements OnInit {
  // @Output() refresh: EventEmitter<string> = new EventEmitter<string>();

  employeeModel: EmployeeModel;

  constructor(
    public employeeService: EmployeeServiceService,
    public router: Router
  ) {
    this.employeeModel = new EmployeeModel();
    this.employeeModel.positionHeld = "Software Engineer";
  }

  submit() {
    console.log("Employee Object", this.employeeModel);
    this.employeeService
      .addEmployee(this.employeeModel.toDTO())
      .subscribe(() => {
        // this.refresh.emit("added");
        this.router.navigate(["home", "employeeList"]);
      });
  }

  ngOnInit() {}
}
