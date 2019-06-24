import { Component, HostBinding, ViewChild } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {

  constructor(private route:ActivatedRoute) { }

  public getRouterOutletState(outlet) {
    //console.log(this.route);
   
    return outlet.isActivated ? outlet.activatedRoute.snapshot.url[0].path : '';
    
  }

}