import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './static/about/about.component';
import { ContactComponent } from './static/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookShowComponent } from './books/book-show/book-show.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    BookListComponent,
    BookShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
