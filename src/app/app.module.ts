import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { SearchComponent } from './search/search.component';
import { UppercaseDirective } from './uppercase.directive';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent,
    EditComponent,
    ChildComponent,
    SearchComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
