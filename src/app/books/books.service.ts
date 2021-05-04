import { Injectable } from '@angular/core';

export type Book = {
  id: string;
  title: string;
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [
    {id: 'f9aa0dc7-7b1e-4c4d-b005-dde151008851', title: 'The Parliament of Man'},
    {id: '819f592a-0117-4eee-b215-4ac375ddbf01', title: 'The Curious Incident of the Dog in the Night-Time'},
    {id: '0d44ed4c-0440-486b-9afa-b0c740aabfde', title: 'Dulce et Decorum Est'},
    {id: '60096059-6350-4c80-98ae-2834f615039c', title: 'Things Fall Apart'},
    {id: '69c7d897-f3e3-4f2b-bf1e-2337f9c3740a', title: 'Unweaving the Rainbow'},
    {id: '51726811-9e14-48e3-9382-d83881b43dd7', title: 'When the Green Woods Laugh'},
    {id: 'c3488b5f-02d1-4575-8f8c-d77882021c87', title: 'In Dubious Battle'},
    {id: '0f402b66-2b9a-468e-9777-16921389606d', title: 'The Monkey\'s Raincoat'},
    {id: '38750a00-cc69-4136-a6ed-857e6e490ecc', title: 'All the King\'s Men'}
  ];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }
}
