import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-app";
  colorElem = "blue";

  name = "abc";
  dateOfBirth: Date = new Date();

  arrayElem: string[] = ["a", "b", "c", "d"];
  customObsSubscription: Subscription;
  customObsSubscription1: Subscription;

  ngOnInit() {
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("first package");
      }, 2000);
      setTimeout(() => {
        observer.next("second package");
      }, 4000);
      setTimeout(() => {
        observer.next("third package");
      }, 6000);
      setTimeout(() => {
        observer.error("this does not work");
        // observer.complete();
      }, 8000);
      setTimeout(() => {
        observer.next("fourth package");
      }, 10000);
    });

    this.customObsSubscription = myObservable.subscribe(
      data => {
        console.log("data sent", data);
      },
      error => {
        console.log("error", error);
      },
      () => {
        console.log("completed");
      }
    );

    this.customObsSubscription1 = myObservable.subscribe(
      data => {
        console.log("data sent", data);
      },
      error => {
        console.log("error", error);
      },
      () => {
        console.log("completed");
      }
    );
  }

  printHello = () => {
    console.log("print hello");
    this.colorElem = "red";
  };

  setInput = function(event) {
    console.log("input", event);
    this.title = event.target.value;
  };

  ngOnDestroy() {
    this.customObsSubscription.unsubscribe();
  }
}
