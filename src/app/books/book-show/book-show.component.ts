import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  book: Book | undefined;
  bookIndex = -1;
  books: Book[] = [];

  constructor(private route: ActivatedRoute, private bookService: BooksService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.books = this.bookService.getBooks();
      this.bookIndex = this.bookService.getBooks().findIndex(book => book.id === params.get('bookId'));
      this.book = this.books[this.bookIndex];
    });
  }

  nextBook(): Book | undefined {
    return this.books[this.bookIndex + 1];
  }

  previousBook(): Book | undefined {
    return this.books[this.bookIndex - 1];
  }

}
