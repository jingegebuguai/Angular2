import {Component, OnInit, OnDestroy} from "@angular/core";
import {ShareService} from "../share.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'channel',
  template: ` <div>
              <div class="top"><img [routerLink]="['/toutiao/all']" [queryParams]="{channel:items,lists:lists}" src="../../../images/back.png"><span>频道选择</span><img src="../../../images/wxb.png"></div><div style="height:60px"></div>
              <div class="channel">
              <div style="font-size: 18px; color:#b92c28;">我的频道</div>
              <div class="my_channel">
              <div class="my_child" *ngIf="has_All()==true">{{all}}</div>
              <div class="my_child" (click)="hot_1()" *ngIf="has_Hot()==true">{{hot}}</div>  
              <div class="my_child" (click)="world_1()" *ngIf="has_World()==true">{{world}}</div>
              <div class="my_child" (click)="entertainment_1()" *ngIf="has_Entertainment()==true">{{entertainment}}</div>
              <div class="my_child" (click)="toutiao_1()" *ngIf="has_Toutiao()==true">{{toutiao}}</div>
              <div class="my_child" (click)="joke_1()" *ngIf="has_Joke()==true">{{joke}}</div>
              <div class="my_child" (click)="beauty_1()" *ngIf="has_Beauty()==true">{{beauty}}</div>
              <div class="my_child" (click)="military_1()" *ngIf="has_Military()==true">{{military}}</div>
              <div class="my_child" (click)="game_1()" *ngIf="has_Game()==true">{{game}}</div>
              <div class="my_child" (click)="tech_1()" *ngIf="has_Tech()==true">{{tech}}</div>
              <div class="my_child" (click)="sports_1()" *ngIf="has_Sports()==true">{{tech}}</div>
              <div class="my_child" (click)="baby_1()" *ngIf="has_Baby()==true">{{baby}}</div>
              <div class="my_child" (click)="finance_1()" *ngIf="has_Finance()==true">{{finance}}</div>
              <div class="my_child" (click)="travel_1()" *ngIf="has_Travel()==true">{{travel}}</div>
              <div class="my_child" (click)="fashion_1()" *ngIf="has_Fashion()==true">{{fashion}}</div>
              <div class="my_child" (click)="regimen_1()" *ngIf="has_Regimen()==true">{{regimen}}</div>
              <div class="my_child" (click)="history_1()" *ngIf="has_History()==true">{{_history}}</div>
              <div class="my_child" (click)="essay_1()" *ngIf="has_Essay()==true">{{essay}}</div>
              <div class="my_child" (click)="story_1()" *ngIf="has_Story()==true">{{story}}</div>
              <div class="my_child" (click)="food_1()" *ngIf="has_Food()==true">{{food}}</div>
               </div> 
               
               <div style="font-size: 18px; color:#b92c28;margin-top:20px">推荐频道</div>
               <div class="my_channel"><div>
               <div class="my_child" *ngIf="has_All()==false">{{all}}</div></div>
               <div class="my_child" (click)="hot_2()" *ngIf="has_Hot()==false">{{hot}}</div>
               <div class="my_child" (click)="world_2()" *ngIf="has_World()==false">{{world}}</div>
               <div class="my_child" (click)="entertainment_2()" *ngIf="has_Entertainment()==false">{{entertainment}}</div>
               <div class="my_child" (click)="toutiao_2()" *ngIf="has_Toutiao()==false">{{toutiao}}</div>
               <div class="my_child" (click)="joke_2()" *ngIf="has_Joke()==false">{{joke}}</div>
               <div class="my_child" (click)="beauty_2()" *ngIf="has_Beauty()==false">{{beauty}}</div>
               <div class="my_child" (click)="military_2()" *ngIf="has_Military()==false">{{military}}</div>
               <div class="my_child" (click)="game_2()" *ngIf="has_Game()==false">{{game}}</div>
               <div class="my_child" (click)="tech_2()" *ngIf="has_Tech()==false">{{tech}}</div>
               <div class="my_child" (click)="sports_2()" *ngIf="has_Sports()==false">{{sports}}</div>
               <div class="my_child" (click)="baby_2()" *ngIf="has_Baby()==false">{{baby}}</div>
               <div class="my_child" (click)="finance_2()" *ngIf="has_Finance()==false">{{finance}}</div>
               <div class="my_child" (click)="travel_2()" *ngIf="has_Travel()==false">{{travel}}</div>
               <div class="my_child" (click)="fashion_2()" *ngIf="has_Fashion()==false">{{fashion}}</div>
               <div class="my_child" (click)="regimen_2()" *ngIf="has_Regimen()==false">{{regimen}}</div>
               <div class="my_child" (click)="essay_2()" *ngIf="has_Essay()==false">{{essay}}</div>
               <div class="my_child" (click)="story_2()" *ngIf="has_Story()==false">{{story}}</div>
               <div class="my_child" (click)="history_2()" *ngIf="has_History()==false">{{_history}}</div>
               <div class="my_child" (click)="food_2()" *ngIf="has_Food()==false">{{food}}</div>
               </div></div>
                </div>`,
  styleUrls: ['channel.component.css'],
  providers: [ShareService]
})
export class ChannelComponent implements OnInit,OnDestroy{
  length:number;
  items:Array<string>;

  //导航名
  hot:string='热点';
  world:string='国际';
  entertainment:string='娱乐';
  beauty:string='美女';
  all:string='推荐';
  toutiao:string='头条';
  military:string='军事';
  game:string='游戏';
  joke:string='段子';
  tech:string='科技';
  sports:string='运动';
  baby:string='育儿';
  finance:string='财经';
  fashion:string='时尚';
  travel:string='旅游';
  regimen:string='养生';
  food:string='美食';
  essay:string='美文';
  _history:string='历史';
  story:string='故事';
  //导航url名
  lists:Array<string>;
  private sub_1:any;
  private sub_2:any;
  constructor(private _activatedRoute:ActivatedRoute){}
  ngOnInit(){
    //获取导航名数据
    this.sub_1=this._activatedRoute.queryParams.subscribe(params=>this.items=params['channel']);
    console.log(this.items);

    //获取导航url数据
    this.sub_2=this._activatedRoute.queryParams.subscribe(params=>this.lists=params['lists']);
  }

  ngOnDestroy(){
    this.sub_1.unsubscribe();
    this.sub_2.unsubscribe();
  }

  item:number;

  /**
   * 判断item数组中是否存在推荐
   */

  has_All(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '推荐') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击推荐触发事件
   */

 /* all_1(){
      for(let i=0;i<this.items.length;i++){
        if(this.items[i]=='推荐'){
          this.item=i;
          break;
        }
      }
      this.items.splice(this.item,1)
  }
  */


  has_World(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '国际') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发国际事件
   * @type {boolean}
   */

  world_1(){
    for(let i=0;i<this.items.length;i++){
        if(this.items[i]=='国际'){
          this.item=i;
          break;
        }
      }
      this.items.splice(this.item,1);
      this.lists.splice(this.item,1);
  }

  has_Hot(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '热点') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发热点事件
   * @type {boolean}
   */

  hot_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='热点'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Entertainment(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '娱乐') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }

  /**
   * 点击触发娱乐事件
   */
  entertainment_1(){
      for(let i=0;i<this.items.length;i++){
        if(this.items[i]=='娱乐'){
          this.item=i;
          break;
        }
      }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Toutiao(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '头条') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }

  /**
   * //点击触发头条号事件
   */

  toutiao_1(){
      for(let i=0;i<this.items.length;i++){
        if(this.items[i]=='头条'){
          this.item=i;
          break;
        }
      }
      this.items.splice(this.item,1);
      this.lists.splice(this.item,1);

  }

  has_Military(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '军事') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发军事事件
   */
  military_1(){
      for(let i=0;i<this.items.length;i++){
        if(this.items[i]=='军事'){
          this.item=i;
          break;
        }
      }
      this.items.splice(this.item,1);
      this.lists.splice(this.item,1);
    }


  has_Game(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '游戏') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发游戏事件
   * @type {boolean}
   */

  game_1(){
      for(let i=0;i<this.items.length;i++){
        if(this.items[i]=='游戏'){
          this.item=i;
          break;
        }
      }
      this.items.splice(this.item,1);
      this.lists.splice(this.item,1);
  }

  has_Joke(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '段子') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发段子事件
   * @type {boolean}
   */
  joke_1(){
      for(let i=0;i<this.items.length;i++){
        if(this.items[i]=='段子'){
          this.item=i;
          break;
        }
      }
      this.items.splice(this.item,1);
      this.lists.splice(this.item,1);
  }

  has_Beauty(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '美女') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }

  /**
   * 点击触发美女事件
   */
  beauty_1(){
      for(let i=0;i<this.items.length;i++){
        if(this.items[i]=='美女'){
          this.item=i;
          break;
        }
      }
      this.items.splice(this.item,1);
      this.lists.splice(this.item,1);
    }

  /**
   * 点击触发科技事件
   * @returns {boolean}
   */
  has_Tech(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '科技') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }

  /**
   * 点击触发娱乐事件
   */
  tech_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='科技'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }


  has_Sports(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '体育') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }

  /**
   * 点击触发体育事件
   */
  sports_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='体育'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Baby(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '育儿') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }

  /**
   * 点击触发育儿事件
   */
  baby_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='育儿'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Finance(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '旅游') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发财经事件
   * @type {boolean}
   */

  finance_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='财经'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Travel(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '旅游') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发旅游事件
   * @type {boolean}
   */

  travel_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='旅游'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Fashion(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '时尚') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发时尚事件
   * @type {boolean}
   */

  fashion_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='时尚'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Regimen(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '养生') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发养生事件
   * @type {boolean}
   */

  regimen_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='养生'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_History(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '历史') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发历史事件
   * @type {boolean}
   */

  history_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='历史'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Essay(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '美文') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发美文事件
   * @type {boolean}
   */

  essay_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='美文'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Story(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '故事') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发故事事件
   * @type {boolean}
   */

  story_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='故事'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }

  has_Food(){
    this.item=this.items.length;
    for(this.item;this.item>0;this.item--) {
      if (this.items[this.item-1] == '美食') {
        return true;
      }
    }
    if(this.item==0) {
      return false;
    }
  }
  /**
   * 点击触发热点事件
   * @type {boolean}
   */

  food_1(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]=='美食'){
        this.item=i;
        break;
      }
    }
    this.items.splice(this.item,1);
    this.lists.splice(this.item,1);
  }
  /**
   * 点击触发添加推荐事件
   */
  /*all_2(){
      this.items.push(this.all);
      this.lists.push('all');
  }*/

  /**
   * 点击触发添加热点事件
   */
  hot_2(){
    this.items.push(this.hot);
    this.lists.push('hot');
  }

  /**
   * 点击触发添加国际事件
   */
  world_2() {
    this.items.push(this.world);
    this.lists.push('world');
  }

  /**
   * 点击触发添加娱乐事件
   */
  entertainment_2(){
    this.items.push(this.entertainment);
    this.lists.push('entertainment');
  }

  /**
   * 点击触发添加头条号事件
   */
  toutiao_2(){
    this.items.push(this.toutiao);
    this.lists.push('toutiao');
  }

  /**
   * 点击触发添加军事事件
   */
  military_2(){
    this.items.push(this.military);
    this.lists.push('military');
  }

  /**
   * 点击触发添加热点事件
   */
  game_2(){
    this.items.push(this.game);
    this.lists.push('game');
  }

  /**
   * 点击触发添加段子事件
   */
  joke_2() {
    this.items.push(this.joke);
    this.lists.push('joke');
  }

  /**
   * 点击触发添加美女事件
   */
  beauty_2(){
    this.items.push(this.beauty);
    this.lists.push('beauty');
  }

  /**
   *
   */
  tech_2(){
    this.items.push(this.tech);
    this.lists.push('tech');
  }

  sports_2(){
    this.items.push(this.sports);
    this.lists.push('sports');
  }

  baby_2(){
    this.items.push(this.baby);
    this.lists.push('baby');
  }
  finance_2(){
    this.items.push(this.finance);
    this.lists.push('finance');
  }
  travel_2(){
    this.items.push(this.travel);
    this.lists.push('travel');
  }
  fashion_2(){
    this.items.push(this.fashion);
    this.lists.push('fashion');
  }
  history_2(){
    this.items.push(this._history);
    this.lists.push('history');
  }
  regimen_2(){
    this.items.push(this.regimen);
    this.lists.push('regimen');
  }
  essay_2(){
    this.items.push(this.essay);
    this.lists.push('essay');
  }
  story_2(){
    this.items.push(this.story);
    this.lists.push('story');
  }
  food_2(){
    this.items.push(this.food);
    this.lists.push('food');
  }
}
