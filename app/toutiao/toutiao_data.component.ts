import {Component, OnInit, Injectable, Input, OnDestroy} from '@angular/core';
import {JsonpModule} from "@angular/http";
import 'rxjs/add/operator/map';
import {ToutiaoApiService} from "app/toutiaoApi.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector:'toutiao_data',
  styleUrls:['toutiao_data.component.css'],
  template:`
  <div *ngIf="image_length>0" class="hot">
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
  </div>
  <!--div *ngIf="image_list.length!==0&&large_image!==null" class="hot2">
    <a id="large_image" href="#">
      <div class="left">
        <div class="title">
          <span>{{title}}</span>
        </div>
        <div style="position:absolute;bottom:10px">
          <span class="source_1">{{source}}</span>
          <span class="comments_1">{{commnets}}</span>
        </div>
      </div>
      <div class="large_image">
        <img src="{{large_image}}"/>
      </div>
    </a>
  </div-->

`,
  providers:[JsonpModule, ToutiaoApiService]
})

export class ToutiaoDataComponent implements OnInit,OnDestroy{
  @Input() count:any;
  comments:number;//评论
  title:string;//标题
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
  item_id:string;
  private sub:any;//设置订阅变量
  constructor(private toutiaoApiservice:ToutiaoApiService,private _activatedRoute:ActivatedRoute){}
  ngOnInit() {
    //获取url参数Observable
    this.sub=this._activatedRoute.params.subscribe(params=>{
     this.type=params['type'];
     });

    /*通过快照snapshot获取url参数
     this.type = this._activatedRoute.snapshot.params['type'];
     */

    //获取娱乐新闻数据
    if(this.type=='entertainment') {
      this.toutiaoApiservice.searchEntertainment().map(res => res.json().data[this.count])

        .subscribe(response => (console.log(response), this.article_genre=response.article_genre,this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url, this.item_id = response.item_id ));
    }

    //获取推荐新闻数据
    if(this.type=='all') {
      this.toutiaoApiservice.searchAll().map(res => res.json().data[this.count])
        .subscribe(response => (console.log(response), this.article_genre=response.article_genre,this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取推荐热点数据
    if(this.type=='hot') {
      this.toutiaoApiservice.searchHot().map(res =>res.json().data[this.count]
        )
        .subscribe(response => (console.log(response),this.article_genre=response.article_genre, this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取国际新闻数据
    if(this.type=='world') {
      this.toutiaoApiservice.searchWorld().map(res => res.json().data[this.count])
        .subscribe(response => (console.log(response),this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取育儿新闻数据
    if(this.type=='baby') {
      this.toutiaoApiservice.searchBaby().map(res => res.json().data[this.count])
        .subscribe(response => (console.log(response), this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取科技新闻数据
    if(this.type=='tech') {
      this.toutiaoApiservice.searchTech().map(res => res.json().data[this.count])
        .subscribe(response => (console.log(response),this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }
    //获取时尚新闻数据
    if(this.type=='fashion') {
      this.toutiaoApiservice.searchFashion().map(res => res.json().data[this.count])
        .subscribe(response => (console.log(response),this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取美女新闻数据
    if(this.type=='beauty') {
      this.toutiaoApiservice.searchBeauty().map(res => res.json().data[this.count])
        .subscribe(response => (console.log(response),this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取体育新闻数据
    if(this.type=='sports') {
      this.toutiaoApiservice.searchSports().map(res => res.json().data[this.count])
        .subscribe(response => (console.log(response),this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取美食新闻数据
    if(this.type=='food') {
      this.toutiaoApiservice.searchFood().map(res=>res.json().data[this.count])
        .subscribe(response => (console.log(response), this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取财经新闻数据
    if(this.type=='finance') {
      this.toutiaoApiservice.searchFinance().map(res=>res.json().data[this.count])
        .subscribe(response => (console.log(response), this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取汽车新闻数据
    if(this.type=='car') {
      this.toutiaoApiservice.searchCar().map(res =>res.json().data[this.count])
        .subscribe(response => (console.log(response),this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }

    //获取本地新闻数据
    if(this.type=='local') {
      this.toutiaoApiservice.searchLocal().map(res =>res.json().data[this.count])
        .subscribe(response => (console.log(response), this.title = response.title, this.comments = response.comments_count,
          this.source = response.source, this.article_genre = response.article_genre, this.image_list = response.image_list,
          this.datetime = response.datetime, /*this.item_seo_url = response.item_seo_url, this.data = response, this.seo_url = response.seo_url,*/
          this.middle_image_1 = response.middle_image, this.middle_image_2 = response.middle_image.url, this.image_length = response.image_list.length,
          this.display_url = response.display_url,this.item_id=response.item_id ))
    }
  }

  /**
   * 获取url的id号
   * @returns {string}
   */

  urlSlice(){
    if(this.article_genre!=null) {
      if (this.seo_url.length == 22) {
        return this.seo_url.slice(2, this.seo_url.length - 1);
      }
      else if (this.item_seo_url.length == 26) {
        return this.item_seo_url.slice(6, this.item_seo_url.length - 1)
      }
      else if (this.item_seo_url.length == 27) {
        return this.item_seo_url.slice(7, this.item_seo_url.length - 1)
      }
    }else
      return this.item_id;
  }

  display_urlSlice(){
    return this.display_url.slice(25,44);
  }
/*
  display_urlSlice(){
    return this.display_url.slice(this.display_url.length-20,this.display_url.length-1);
  }
  */
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
