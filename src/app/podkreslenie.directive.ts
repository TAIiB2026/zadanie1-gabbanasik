import { Directive, HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appPodkreslenie]',
  standalone: false
})
export class PodkreslenieDirective {

  // Wiążemy właściwość CSS 'text-decoration' z naszą zmienną
  @HostBinding('style.textDecoration') decoration: string = 'none';

  // Nasłuchujemy najechania myszką
  @HostListener('mouseenter') onMouseEnter() {
    this.decoration = 'underline';
  }

  // Nasłuchujemy zjechania myszką
  @HostListener('mouseleave') onMouseLeave() {
    this.decoration = 'none';
  }
  constructor() { }

}
