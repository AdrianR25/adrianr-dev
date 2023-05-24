import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("blob") blob!: ElementRef;
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: any) {
    this.blob.nativeElement.animate({
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    }, {duration: 3000, fill: "forwards"});
  }
}
