import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  @Input() employee;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  deleteFn(key: number) {
    console.log("employee object", key);
    this.deleteEvent.emit(key);
  }
}
