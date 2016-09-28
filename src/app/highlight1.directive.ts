import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight1]'
})
export class Highlight1Directive {

  @HostListener('mouseenter') onmouseover(){
    this.backgroundColor = 'green';
  };

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = 'white';
  };

  @HostListener('click', ['$event']) onclick(event) {
    console.log("Event Target " + event.target);
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };

  private backgroundColor = 'white';
  
  constructor() { }
 
}
