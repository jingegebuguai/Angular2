import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'toutiao',
  template: `<nav></nav><div style="height:87px"></div>
             <div *ngFor="let count of counts"><toutiao_data [count]="count"></toutiao_data></div>
             
             <div *ngFor="let _count of _counts">
            <div *ngIf="is_add[_count]==true">
            <div *ngFor="let count of counts">
            <toutiao_data [count]="count"></toutiao_data>
            </div></div></div>
            <div class="addNew"><span on-click="addNew()">点击加载...</span></div>
            <div style="height:65px"></div>
             <footer></footer>`,
  styleUrls: ['toutiao.component.css']
})
export class ToutiaoComponent{
  constructor(){}
  is_add:Array<boolean>=[];
  _counts:Array<number>=[];
  private sub:any;
  type:string;
  i:number=0;
  counts:Array<number>=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  /**
   * 点击加载新闻
   */
  addNew(){
    this._counts.push(this.i);
    this.is_add[this.i]=true;
    this.i+=1;
  }
}
