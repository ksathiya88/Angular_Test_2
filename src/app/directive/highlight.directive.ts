import {
  Directive,
  ElementRef,
  OnInit,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective implements OnInit {
  @HostBinding("value") inputValue;
  @HostBinding("style.backgroundColor") backColor;

  @HostListener("click") onclick() {
    console.log("Element Clicked");
    this.backColor = "yellow";
    this.inputValue = "clicked";
  }

  @HostListener("mouseleave") onMouseLeave() {
    console.log("Element Clicked");
    this.backColor = "blue";
    this.inputValue = "leave";
  }

  constructor(public elementRef: ElementRef) {
    console.log("elementRef", elementRef);
  }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = "yellow";
    this.backColor = "red";
    this.inputValue = "sample";
  }
}
