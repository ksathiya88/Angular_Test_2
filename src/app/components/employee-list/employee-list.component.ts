import { Component, OnInit } from "@angular/core";
import { DeleteServiceService } from "src/app/service/delete-service.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  deleteService: DeleteServiceService;
  employees = [
    {
      key: 1,
      name: "ABC",
      date_of_birth: "10/10/2010",
      position_held: "Manager"
    },
    {
      key: 2,
      name: "John",
      date_of_birth: "10/10/2010",
      position_held: "Manager",
      member: "golden"
    },
    {
      key: 3,
      name: "Michael",
      date_of_birth: "10/10/2010",
      position_held: "Manager"
    },
    {
      key: 4,
      name: "Michael",
      date_of_birth: "10/10/2010",
      position_held: "Manager"
    },
    {
      key: 5,
      name: "Michael",
      date_of_birth: "10/10/2010",
      position_held: "Manager"
    },
    {
      key: 6,
      name: "Michael",
      date_of_birth: "10/10/2010",
      position_held: "Manager"
    }
  ];

  constructor(deleteService: DeleteServiceService) {
    this.deleteService = deleteService;
  }

  ngOnInit() {}

  deleteEmployee(key: number) {
    // console.log("deleteEmployee111111", key);
    // const item = this.employees.find(item1 => {
    //   return item1.key === key;
    // });
    // this.employees.splice(this.employees.indexOf(item), 1);
    // return;
    this.deleteService.deleteFromList(this.employees, key);
  }
}
