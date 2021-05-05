import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies = this.activatedRoute.snapshot.data.movies;
    // this.moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

}
