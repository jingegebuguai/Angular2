import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';

@Injectable()
export class ToutiaoApiService {
  constructor(private jsonp: Jsonp) {
  }
  //获取推荐新闻数据
  searchAll() {
    let Url='http://toutiao.com/api/article/recent/?source=2&category=__all__&as=A105177907376A5&cp=5797C7865AD54E1&count=20&offset=0&_=1481986412';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }
  //获取最新娱乐新闻数据
  searchEntertainment() {
    let Url='http://toutiao.com/api/article/recent/?source=2&category=news_entertainment&as=A105177907376A5&cp=5797C7865AD54E1&count=20&offset=0&_=1481986412';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取最新热点新闻数据
  searchHot() {
    let Url='http://toutiao.com/api/article/recent/?source=2&category=news_hot&as=A105177907376A5&cp=5797C7865AD54E1&count=20&offset=0&_=1481986412';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取最新本地新闻数据
  searchLocal() {
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=南京&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取最新国际新闻数据
  searchWorld() {
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=国际&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取美女Api接口
  searchBeauty(){
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=美女&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取财经Api接口
  searchFinance(){
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=财经&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取汽车Api接口
  searchCar(){
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=汽车&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取体育Api接口
  searchSports(){
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=体育&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取军事Api接口
  searchMilitary(){
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=军事&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取科技Api接口
  searchTech(){
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=科技&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取育儿Api接口
  searchBaby(){
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=育儿&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取时尚Api接口
  searchFashion(){
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=时尚&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  ////获取旅游Api接口
  searchFood(){
    let Url='http://www.toutiao.com/search_content/?offset=0&format=json&keyword=美食&autoload=true&count=20&cur_tab=1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }



  //获取段子Api接口
  searchJoke(){
    let Url = 'http://www.toutiao.com/api/article/feed/?category=essay_joke&count=8&as=A115C8457F69B85&cp=585F294B8845EE1';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
  }

  //获取头条号Api接口
  searchToutiao(){

  }

  //获取新闻数据
  searchArticle() {
    let Url = 'http://m.toutiao.com/i6364969235889783298/info/';
    let params = new URLSearchParams();
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(Url, {search: params})
      .map(res=>res.json())
  }


}
