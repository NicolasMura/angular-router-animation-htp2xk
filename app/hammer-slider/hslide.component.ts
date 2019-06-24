import { Component, OnInit, HostBinding, HostListener, ViewChild, Input, ElementRef } from '@angular/core';


@Component({
  selector: 'hslide',
  templateUrl: './hslide.component.html',
  styleUrls: ['./hslide.component.scss']
})
export class HSlideComponent implements OnInit {


  @HostBinding('class.hslide') hslide: boolean = true;

  constructor() {

  }

  ngOnInit() {

  }
}