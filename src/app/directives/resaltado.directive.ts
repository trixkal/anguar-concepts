import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {


@Input('appResaltado') nuevoColor: string;

  constructor( private ele: ElementRef) {

//    ele.nativeElement.style.backgroundColor = 'Yellow';
   }


   @HostListener('mouseenter') mouseEntro() {
    
    this.resaltar(this.nuevoColor || 'yellow');
    //this.ele.nativeElement.style.backgroundColor = 'Yellow';
   }

   @HostListener('mouseleave') mouseSale() {
    this.ele.nativeElement.style.backgroundColor = null;
   }

   private resaltar(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
   }
}
