import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'search',
  template: `<div class="top">
            <div><img (click)="back()" src="../../../images/back.png" onmouseover="this.src='../../../images/back_1.png'" onmouseout="this.src='../../../images/back.png'"></div>
            <div><span>头条搜索</span></div><div><img src="../../../images/wxb.png"></div></div>
            <div style="height:50px"></div>
            <div class="search"><input #box [routerLink]="['search']" (keyup.enter)="onEnter(box.value)">
            </div>
            
            <div *ngFor="let count of counts">
            <search_data [count]="count"></search_data>   
            </div>   
             
             <div *ngFor="let _count of _counts">
            <div *ngIf="is_add[_count]==true">
            <div *ngFor="let count of counts">
            <search_data [count]="count"></search_data>
            </div></div></div>
            <div class="addNew"><span on-click="addNew()">点击加载...</span></div>`,
  styleUrls: ['search.component.css']
})
export class SearchComponent {
  counts: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7];
  value: any;
  sub: any;
  i:number=0;
  _counts:Array<number>=[];
  is_add:Array<boolean>=[];
  addNew(){
    this._counts.push(this.i);
    this.is_add[this.i]=true;
    this.i+=1;
  }
  back(){
    window.history.back();
  }
  constructor(private route: Router) {
  }

  onEnter(value: string) {
    this.value = value;
    //实现回车路由跳转,传递搜索值
    this.route.navigate(['search'], {queryParams: {value: this.value}});
    window.location.reload();
  }

}
