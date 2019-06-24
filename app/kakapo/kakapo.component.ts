import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kakapo',
  templateUrl: './kakapo.component.html',
  styleUrls: ['./kakapo.component.scss']
})
export class KakapoComponent implements OnInit {


  slides:any = [{id:1,label:'One'}, {id:2, label:'Two'}, {id: 3, label:'Three'}];

  constructor() { }

  ngOnInit() {

  }

}