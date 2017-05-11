import {NgModule, ModuleWithProviders}            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import {RouterModule} from "@angular/router";
import {NavComponent} from './nav';
import {HttpModule, JsonpModule} from "@angular/http";
import {rootRouterConfig} from "./app.routes";
import {NewItem1Component} from "./toutiao/new_item1.component";
import {ToutiaoComponent} from "./toutiao/toutiao.component";
import {ToutiaoDataComponent} from "./toutiao/toutiao_data.component";
import {ToutiaoApiService} from "./toutiaoApi.service";
import {FooterComponent} from "./footer/footer.component";
import {ArticleComponent} from "./article/article.component";
import {JokeDataComponent} from "./joke/joke_data.component";
import {JokeComponent} from "./joke/joke.component";
import {CommentsComponent} from "./article/comments.component";
import {ChannelComponent} from "./channel/channel.component";
import {ShareService} from "./share.service";
import {SearchComponent} from "./search/search.component";
import {SearchDataComponent} from "./search/search_data.component";


let rootRouterModule:ModuleWithProviders=RouterModule.forRoot(rootRouterConfig);
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    rootRouterModule,
    JsonpModule,
    FormsModule
  ],
  providers:[ToutiaoApiService,ShareService],
  declarations: [
    AppComponent,
    NavComponent,
    NewItem1Component,
    ToutiaoDataComponent,
    ToutiaoComponent,
    FooterComponent,
    ArticleComponent,
    JokeDataComponent,
    JokeComponent,
    CommentsComponent,
    ChannelComponent,
    SearchComponent,
    SearchDataComponent
  ],


  bootstrap: [ AppComponent ]
})
export class AppModule { }
