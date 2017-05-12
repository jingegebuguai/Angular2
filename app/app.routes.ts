import {Routes} from "@angular/router";
import {NavComponent} from "./nav";
import {ToutiaoComponent} from "./toutiao/toutiao.component";
import {ToutiaoDataComponent} from "./toutiao/toutiao_data.component";
import {FooterComponent} from "./footer/footer.component";
import {ArticleComponent} from "./article/article.component";
import {JokeDataComponent} from "./joke/joke_data.component";
import {JokeComponent} from "./joke/joke.component";
import {CommentsComponent} from "./article/comments.component";
import {ChannelComponent} from "./channel/channel.component";
import {SearchComponent} from "./search/search.component";
import {SearchDataComponent} from "./search/search_data.component";





export const rootRouterConfig: Routes=[
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'toutiao/:type',
    component: ToutiaoComponent
  },
  {
    path: 'toutiao_data',
    component: ToutiaoDataComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'article/:url/:group_id/:item_id',
    component: ArticleComponent
  },
  {
    path: 'joke_data',
    component:JokeDataComponent
  },
  {
    path: 'joke',
    component:JokeComponent
  },
  {
    path: 'comments',
    component:CommentsComponent
  },
  {
    path: 'channel',
    component:ChannelComponent
  },
  {
    path: 'search',
    component:SearchComponent
  },
  {
    path: 'search_data',
    component:SearchDataComponent
  }
];
