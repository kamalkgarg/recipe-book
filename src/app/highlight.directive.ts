import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
    //this.elementRef.nativeElement.style.color = 'green';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', 'red');
  }

}
