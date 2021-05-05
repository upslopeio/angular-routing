import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './static/about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './static/contact/contact.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookShowComponent } from './books/book-show/book-show.component';
import { EmailListComponent } from './email/email-list/email-list.component';
import { EmailShowComponent } from './email/email-show/email-show.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // TODO: define a route that maps /about => the AboutComponent
  {
    path: 'about',
    component: AboutComponent
  },
  // TODO: define a route that maps /contact => the ContactComponent
  {
    path: 'contact',
    component: ContactComponent
  },
  // TODO: define a route that maps /books => the BookListComponent
  {
    path: 'books',
    component: BookListComponent
  },
  // TODO: define a route that maps /books/:bookId => the BookShowComponent
  {
    path: 'books/:bookId',
    component: BookShowComponent
  },
  // TODO: define a route that maps /emails => the EmailListComponent
  {
    path: 'emails',
    component: EmailListComponent,
    children: [
      {
        path: ':emailId',
        component: EmailShowComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
