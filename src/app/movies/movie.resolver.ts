import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie, MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie[]> {
  constructor(private movieService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
    return this.movieService.getMovies();
  }
}
