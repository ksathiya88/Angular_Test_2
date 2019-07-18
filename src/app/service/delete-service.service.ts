import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DeleteServiceService {
  constructor() {}

  deleteFromList(list: any[], key: number) {
    console.log("list", list, key);
    const item = list.find(item1 => {
      return item1.key === key;
    });

    list.splice(list.indexOf(item), 1);
    return;
  }
}
