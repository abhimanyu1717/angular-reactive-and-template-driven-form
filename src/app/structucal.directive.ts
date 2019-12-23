import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector:'[appHighlightDir]'
})
export class HighLightDirective {
  constructor(el:ElementRef){
    el.nativeElement.style.backgroundColor="green";
  }
}
