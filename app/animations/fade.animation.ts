import { trigger, animate, transition, style, query, keyframes } from '@angular/animations';
import * as kf from './keyframes';

export const fadeAnimation =

  trigger('fadeAnimation', [

    transition('* => kakapo', [
      query(':enter', [animate(300, keyframes(kf.slideOutLeft))], { optional: true }),
      query(':leave', [animate(300, keyframes(kf.slideOutLeft))], { optional: true }),
      query(':enter', [animate(300, keyframes(kf.slideInLeft))], { optional: true })
    ]),
    transition('kakapo => fairy-tern', [
      query(':enter', [animate(300, keyframes(kf.slideOutRight))], { optional: true }),
      query(':leave', [animate(300, keyframes(kf.slideOutRight))], { optional: true }),
      query(':enter', [animate(300, keyframes(kf.slideInRight))], { optional: true })
    ]),
    transition('* => *', [
      query(':enter', [animate(300, keyframes(kf.flipOutY))], { optional: true }),
      query(':leave', [animate(300, keyframes(kf.flipOutY))], { optional: true }),
      query(':enter', [animate(300, keyframes(kf.flipOutY))], { optional: true })
    ])

  ]);