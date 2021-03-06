import {Component, OnInit, Injectable, Input, OnDestroy} from '@angular/core';
import {JsonpModule, Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {ToutiaoApiService} from "app/toutiaoApi.service";
@Component({
  selector:'joke_data',
  styleUrls:['joke_data.component.css'],
  template:`<div class="joke">
            <div class="text">{{text}}</div>
            <div class="bottom">
            <div><img (click)="good()" src="{{good_src}}"><span>{{digg_count}}</span></div>
            <div style="margin-left:20px"><img (click)="bad()" src="{{bad_src}}"><span>{{bury_count}}</span></div>
            <div style="margin-left: 20px"><img src="../../../images/comments.png"><span>{{comment_count}}</span> </div>
            </div></div>
`,
  providers:[JsonpModule, ToutiaoApiService]
})

export class JokeDataComponent implements OnInit{
  @Input() count:any;
  category:string;
  text:string;
  comment_count:number;
  id:number;
  bury_count:number;
  digg_count:number;
  type:string;
  constructor(private jsonp:Jsonp){}
  ngOnInit() {
    let Url = 'http://www.toutiao.com/api/article/feed/?category=essay_joke&as=A115C8457F69B85&cp=585F294B8845EE1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    //params.set('format', 'json');
    //params.set('callback','__ng_jsonp__.__req1.finished');
    params.set('callback','JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
       .map(res => {
          if (res.json().data[this.count].group.category_name == '内涵段子')
            return res.json().data[this.count].group
        })
          .subscribe(response => (console.log(response), this.category = response.category, this.text = response.text,
            this.id = response.id, this.bury_count = response.bury_count, this.digg_count = response.digg_count,
            this.comment_count = response.comment_count))

  }
  //取消订阅，避免内存泄漏
  /*ngOnDestroy(){
   this.sub.unsubscribe();
   }*/


  /**
   * 段子点赞函数
   * @type {boolean}
   */
  isGood:boolean=true;
  good_src:string='../../../images/good.png';
  good(){
    if(this.isGood==true&&this.isBad==true) {
      this.digg_count++;
      this.isGood=false;
      this.good_src='../../../images/good_1.png';
    }
    else if(this.isGood==false) {
      this.digg_count--;
      this.isGood=true;
      this.good_src='../../../images/good.png';
    }
  }

  /**
   * 段子踩..函数
   * @type {boolean}
   */
  isBad:boolean=true;
  bad_src='../../../images/bad.png';
  bad(){
    if(this.isBad==true&&this.isGood==true) {
      this.bury_count++;
      this.isBad=false;
      this.bad_src='../../../images/bad_1.png';
    }
    else if(this.isBad==false) {
      this.bury_count--;
      this.isBad=true;
      this.bad_src='../../../images/bad.png';
    }
  }

}
