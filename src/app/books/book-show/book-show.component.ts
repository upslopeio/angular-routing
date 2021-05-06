import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  book: Book | undefined;
  bookIndex = -1;
  books: Book[] = [];

  // TODO: inject the ActivatedRoute
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    // TODO: figure out how to get the path from the ActivatedRoute
    this.books = this.bookService.getBooks();
    this.bookIndex = this.bookService.getBooks().findIndex(book => book.id === '???');
    this.book = this.books[this.bookIndex];
  }

  nextBook(): Book | undefined {
    return this.books[this.bookIndex + 1];
  }

  previousBook(): Book | undefined {
    return this.books[this.bookIndex - 1];
  }

}
