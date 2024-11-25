import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'fruits', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent, title:"Fruit: Home"},
  {path:'create', component:AddComponent, title:"Fruits: Create Entry"},
  {path:'edit/:id',component:EditComponent,title:"Fruits: Edit "},
  {path:'search',component:SearchComponent,title:"RXJS Operations"},
  { path: '*', redirectTo: 'fruit', title: "PageNotFound" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
