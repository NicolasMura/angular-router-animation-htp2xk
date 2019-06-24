import { Component, HostBinding, ViewChild, ContentChildren, Input, ElementRef, OnInit, QueryList, Renderer2 } from '@angular/core';
//ViewChildren, HostListener, 
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';

import { HSlideComponent } from './hslide.component';
//import { sliding } from './hammer-slider.animation';

@Component({
  selector: 'hammer-slider',
  templateUrl: './hammer-slider.component.html',
  styleUrls: ['./hammer-slider.component.scss']
})
export class HammerSliderComponent implements OnInit {

  activeSlide: number = 0;
  slideCount: number = 0;

  @Input('config') config: any[] = [];

  rect: any = {};

  @ViewChild('mask') mask: ElementRef;
  maskw: number = 0;
  maskh: number = 0;

  @ViewChild('wrap') wrap: ElementRef;
  wrapw: number = 0;
  wraph: number = 0;

  @ContentChildren(HSlideComponent) hslides: QueryList<HSlideComponent>

  public perc: number;
  public pos: number;

  private player;
  private animating: boolean = false;
  //@HostListener('window:resize', ['$event.target'])
  //onResize() {
  //this.getSize();
  //}

  constructor(private el: ElementRef, private rend: Renderer2, private builder: AnimationBuilder) {

  }

  ngOnInit() {
    //
    //this.getSize();
  }

  ngAfterContentInit() {

    this.slideCount = this.hslides.length;
    //console.log(this.hslides);
    this.getSize();
  }

  ngAfterContentChecked() {

  }

  getSize() {

    this.rect = this.el.nativeElement.getBoundingClientRect();
    this.maskw = this.mask.nativeElement.offsetWidth;
    this.maskh = this.mask.nativeElement.offsetHeight;
    this.wrapw = this.maskw * this.slideCount;

    //this.wraph = this.wrap.nativeElement.offsetHeight;
    //console.log(this.maskw, this.maskh);
  }

  panStart(e) {

    this.getSize();

  }

  panMove(e) {

    this.perc = 100 / this.slideCount * e.deltaX / this.maskw;
    this.pos = this.perc - 100 / this.slideCount * this.activeSlide;
    this.rend.setStyle(this.wrap.nativeElement, 'transform', 'translateX( ' + this.pos + '%)');

    //console.log(this.pos );
  }

  panEnd(e) {

    if (e.velocityX > 1) {
      this.goTo(this.activeSlide - 1);
    } else if (e.velocityX < -1) {
      this.goTo(this.activeSlide + 1)
    } else {
      if (this.perc <= -(25 / this.slideCount))
        this.goTo(this.activeSlide + 1);
      else if (this.perc >= (25 / this.slideCount))
        this.goTo(this.activeSlide - 1);
      else
        this.goTo(this.activeSlide);
    }
  }

  goTo(_to) {

    console.log(_to);

    if (_to < 0)
      this.activeSlide = 0;
    else if (_to > this.slideCount - 1)
      this.activeSlide = this.slideCount - 1;
    else
      this.activeSlide = _to;


    this.pos = -(100 / this.slideCount) * this.activeSlide;
    this.animTo(this.pos);

    //this.rend.setStyle(this.wrap.nativeElement, 'transform', 'translateX( ' + this.pos + '%)');

  }

  animTo(pos) {
    this.animating = true;
    let factory = this.builder.build([
      animate(300, style({ transform: 'translateX( ' + pos + '%)' }))
    ]);
    this.player = factory.create(this.wrap.nativeElement);
    this.player.onDone(() => {
      this.animEnd(pos);
    });
    this.player.play();
  }

  animEnd(pos) {

    this.animating = false;
    this.rend.setStyle(this.wrap.nativeElement, 'transform', 'translateX( ' + pos + '%)');
    this.player.destroy();

  }


};
