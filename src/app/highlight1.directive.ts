import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight1]'
})
export class Highlight1Directive {
  
  @Input() defaultColor = 'white';
  //@Input() highlightColor = 'green';
  @Input('highlight') highlightColor = 'green';

  private backgroundColor = this.defaultColor;

  @HostListener('mouseenter') onmouseover(){
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostListener('click', ['$event']) onclick(event) {
    console.log("Event Target " + event.target);
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  
  constructor() { } 
}