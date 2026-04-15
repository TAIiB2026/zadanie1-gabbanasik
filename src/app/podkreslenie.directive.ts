import { Directive, HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appPodkreslenie]',
  standalone: false
})
export class PodkreslenieDirective {

  
  @HostBinding('style.textDecoration') decoration: string = 'none';

  
  @HostListener('mouseenter') onMouseEnter() {
    this.decoration = 'underline';
  }

 
  @HostListener('mouseleave') onMouseLeave() {
    this.decoration = 'none';
  }
  constructor() { }

}
