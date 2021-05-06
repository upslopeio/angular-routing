import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './static/about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './static/contact/contact.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookShowComponent } from './books/book-show/book-show.component';
import { EmailListComponent } from './email/email-list/email-list.component';
import { EmailShowComponent } from './email/email-show/email-show.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieResolver } from './movies/movie.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // TODO: define a route that maps /about => the AboutComponent
  // TODO: define a route that maps /contact => the ContactComponent
  // TODO: define a route that maps /books => the BookListComponent
  // TODO: define a route that maps /books/:bookId => the BookShowComponent
  // TODO: define a route that maps /emails => the EmailListComponent
  // TODO: define a child route that maps /emails/:emailId => the EmailShowComponent
  // TODO: define a route that maps /movies => the MoviesListComponent with a resolver
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
