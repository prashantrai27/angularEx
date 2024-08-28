import { Directive,HostListener,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ref:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseenter() {
    this.renderer.setStyle(this.ref.nativeElement,'background-color','lightblue')
  }
  @HostListener('mouseleave') mouseleave() {
   this.renderer.removeStyle(this.ref.nativeElement,'background-color')
  }

}
