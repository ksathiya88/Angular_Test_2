import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EmployeeModel } from "src/app/model/EmployeeModel";
import { ActivatedRoute } from "@angular/router";
import { EmployeeServiceService } from "src/app/api/employee.service";
import { IEmployeeDTO } from "src/app/api/employee.dto";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  @Input() employee: EmployeeModel;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  value1 = "Hello";
  constructor(
    public activatedRoute: ActivatedRoute,
    public employeeService: EmployeeServiceService
  ) {}


  ngOnChanges(simpleProperty:any){
    console.log("ngOnChanges",simpleProperty);
  }

  
  ngDoCheck(){
    console.log("ngDoCheck");
  }

  // runs once when the content gets projected 
  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
  }
  
  // runs multiple times to check whether
  // content projected has changed 
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }
  
  // After View is intialised
  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
  }


  // After View is Checked
  // multiple times
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }

  ngOnInit() {
    console.log("ngOnInit");
    // console.log("actiavedRoute", this.activatedRoute.snapshot.params);
    // console.log("query Params", this.activatedRoute.snapshot.queryParams);
    // console.log("fragment", this.activatedRoute.snapshot.fragment);
    const key = this.activatedRoute.snapshot.params.key;
    if (key) {
      this.employeeService.getEmployee(key).subscribe((emp: IEmployeeDTO) => {
        // console.log('employee', emp);
        this.employee = EmployeeModel.fromDTO(emp);
      });
    }
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called");
  }

  deleteFn(key: number) {
    console.log("employee object", key);
    this.deleteEvent.emit(key);
  }
}
