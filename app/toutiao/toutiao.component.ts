import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'toutiao',
  template: `<nav></nav><div style="height:87px"></div>
             <div *ngFor="let count of counts"><toutiao_data [count]="count"></toutiao_data></div>
             <div style="height:65px"></div>
             <footer></footer>`,
  styleUrls: ['toutiao.component.css']
})
export class ToutiaoComponent{
  constructor(){}
  private sub:any;
  type:string;
  counts:Array<number>=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
}
