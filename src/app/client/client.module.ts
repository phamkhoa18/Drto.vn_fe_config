import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './spinner.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './client/sidebar/sidebar.component';
import { TheardsComponent } from './layout-components/separate-components/theards/theards.component';
import { HomeComponent } from './layout-components/home/home.component';
import { OutstandingComponent } from './layout-components/separate-components/outstanding/outstanding.component';
import { SwipercategoryComponent } from './layout-components/separate-components/swipercategory/swipercategory.component';
import { ListnewsComponent } from './layout-components/separate-components/listnews/listnews.component';
import { AdscategoryComponent } from './layout-components/separate-components/adscategory/adscategory.component';
import { OnecategoryComponent } from './layout-components/separate-components/onecategory/onecategory.component';
import { SwiperitemsComponent } from './layout-components/separate-components/swiperitems/swiperitems.component';
import { CategoryComponent } from './layout-components/category/category.component';
import { NewsComponent } from './layout-components/news/news.component';
import { SidebarmobileComponent } from './client/sidebarmobile/sidebarmobile.component';
import { SearchComponent } from './layout-components/search/search.component';
import { MenusearchComponent } from './layout-components/separate-components/menusearch/menusearch.component';

@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    SpinnerComponent,
    CategoryComponent,
    SidebarComponent,
    TheardsComponent,
    OutstandingComponent,
    SwipercategoryComponent,
    ListnewsComponent,
    AdscategoryComponent,
    OnecategoryComponent,
    SwiperitemsComponent,
    NewsComponent,
    SidebarmobileComponent,
    MenusearchComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ClientModule { }
