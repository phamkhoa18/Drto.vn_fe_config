import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './layout-components/home/home.component';
import { CategoryComponent } from './layout-components/category/category.component';
import { NewsComponent } from './layout-components/news/news.component';
import { SearchComponent } from './layout-components/search/search.component';

const routes: Routes = [
  {path : '' , component : ClientComponent , children : [
       {path : 'trang-chu' , component : HomeComponent},
       {path : 'bai-viet/:name' , component : NewsComponent} ,
       {path : 'danh-muc/:name' , component : CategoryComponent},
       {path : 'tim-kiem/:name' , component : SearchComponent},
       {path : '' , redirectTo : '/trang-chu' , pathMatch : 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
