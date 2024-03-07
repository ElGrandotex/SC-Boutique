import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CarouselItem } from 'src/app/interfaz/carousel-item.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  animations: [
    trigger('slide', [
      transition('hidden => visible', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition('visible => hidden', [
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class PrincipalComponent{


}
