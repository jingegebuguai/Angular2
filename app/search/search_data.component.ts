import {Component, OnInit, Input, OnDestroy} from "@angular/core";

import {Jsonp, URLSearchParams} from "@angular/http";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'search_data',
  template: `<div *ngIf="image_length>0" class="hot">
    <a id="images" [routerLink]="['/article',urlSlice(),display_urlSlice(),urlSlice()]">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="images">
        <img src="{{image_list[0].url}}">
        <img src="{{image_list[1].url}}"/>
        <img src="{{image_list[2].url}}"/>
      </div>
      <div>
        <span class="source">{{source}}</span>
        <span class="comments">{{comments}}评论</span>
        <span class="time">{{datetime}}</span>
      </div>
    </a>
  </div>
  <div *ngIf="image_length==0&&(middle_image_1||middle_image_2)" class="hot2">
    <a id="large_image" [routerLink]="['/article',urlSlice(),display_urlSlice(),urlSlice()]">
      <div class="left">
        <div class="title">
          <span>{{title}}</span>
        </div>
        <div style="position:absolute;bottom:10px;">
          <span class="source_1">{{source}}</span>
          <span class="comments_1">{{comments}}</span>
        </div>
      </div>
      <div class="large_image" *ngIf="middle_image_2!=null">
        <img src="{{middle_image_2}}"/>
      </div>
      <div class="large_image" *ngIf="middle_image_2==null">
        <img src="{{middle_image_1}}" />
      </div>
    </a>
  </div>`,
  styleUrls: ['search_data.component.css']
})
export class SearchDataComponent implements OnInit,OnDestroy{
  @Input() count:any;
  value:any;
  comments:number;
  title:string;
  image_list:any;
  middle_image_1:string;//中图
  middle_image_2:string;
  large_image:string;//大图
  source:string;//来源
  article_genre:string;//类型(video、article)
  datetime:string; //时间戳
  item_seo_url:string;//文章内容url
  data:any;
  seo_url:string;
  type:string;//新闻类型
  image_length:number;
  length:string;//
  display_url:string;//显示评论有关信息
  keywords:string;
  item_id:string;
  private sub:any;//设置订阅变量
  constructor(private jsonp:Jsonp,private activatedRoute:ActivatedRoute){}
  ngOnInit(){
    // console.log(this.value);
    this.sub=this.activatedRoute.queryParams.subscribe(params=>
      this.value=params['value']);
    let Url = 'http://www.toutiao.com/search_content/?offset=0&format=json&keyword='+this.value+'&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
      .map(res=>res.json().data[this.count])
      .subscribe(response=>(console.log(response), this.title = response.title, this.comments = response.comments_count,
        this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
        this.datetime = response.datetime, this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,
        this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
        this.display_url = response.display_url,this.item_id=response.item_id,this.keywords=response.keywords))
  }
  urlSlice(){
    return this.item_id;
  }

  display_urlSlice(){
    return this.display_url.slice(this.display_url.length-20,this.display_url.length-1);
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
