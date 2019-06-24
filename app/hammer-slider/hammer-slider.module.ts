import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HammerSliderComponent } from './hammer-slider.component';
import {HSlideComponent} from './hslide.component';


@NgModule({
  imports: [ 
    CommonModule
  ],
  exports:[
    HammerSliderComponent,
    HSlideComponent
  ],
  declarations: [ 
    HammerSliderComponent,
    HSlideComponent
  ]
})
export class HammerSliderModule { }