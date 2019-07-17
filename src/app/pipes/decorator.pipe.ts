import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "decorator"
})
export class DecoratorPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log("value11111", value);
    console.log("args", args);
    if (args[1].key != 4) {
      return args[0] + value + args[0];
    } else {
      return value;
    }
  }
}
