import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  colorElem = "blue";

  arrayElem: string[] = ["a", "b", "c", "d"];

  name = "abc";
  dateOfBirth: Date = new Date();

  printHello = () => {
    console.log("print hello");
    this.colorElem = "red";
  };

  setInput = function(event) {
    console.log("input", event);
    this.title = event.target.value;
  };
}
