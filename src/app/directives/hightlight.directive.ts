import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  // elementRef đại diện cho tag được gắn directive vào
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'red'
    this.elementRef.nativeElement.classList.add('w-25')

  }

  @HostListener('click') handleClick() {
    // this.elementRef.nativeElement.classList.toggle('w-25')
    this.elementRef.nativeElement.style.transform = "translateX(200px)"
  }

  @HostListener('mouseover') handleMouseover() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue'
  }

  @HostListener('mouseleave') handleMouseleave() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow'
  }

}

