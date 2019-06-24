import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { KakapoComponent } from './kakapo/kakapo.component';
import { FairyTernComponent } from './fairy-tern/fairy-tern.component';

import { AppRoutingModule } from './app.routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MatCardModule, MatButtonModule } from '@angular/material';

import { HammerCardComponent } from './hammer-card/hammer-card.component';
import { HammertimeDirective } from './directives/hammertime.directive';

import { HammerSliderModule } from './hammer-slider/hammer-slider.module';


import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class HammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': { direction: Hammer.DIRECTION_ALL  }
  }
}

@NgModule({
  imports: [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    RouterModule,
    AppRoutingModule,
    MatCardModule, 
    MatButtonModule,
    HammerSliderModule
  ],
  declarations: [ 
    AppComponent,
    KakapoComponent,
    FairyTernComponent, 
    NavBarComponent,
    HammerCardComponent,
    HammertimeDirective,
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [ { 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: HammerConfig 
  }]
})
export class AppModule { }
