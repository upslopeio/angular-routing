import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './static/about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './static/contact/contact.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
