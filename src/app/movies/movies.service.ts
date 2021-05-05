import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export type Movie = {
  id: string,
  title: string,
  year: number
};

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[] = [
    {
      id: 'f05b62fe-2f75-4909-bcfb-1af32a9a539d',
      title: 'Mr. Smith Goes to Washington',
      year: 1990
    },
    {
      id: '84e2a590-668d-42f6-9cd9-b32c9e1d73f8',
      title: 'The Intouchables',
      year: 1978
    },
    {
      id: '75f046e7-753e-4767-8542-2afca74e3a30',
      title: 'The Grapes of Wrath',
      year: 1998
    },
    {
      id: '8c5135d4-537d-45c4-95c1-388225bf7c68',
      title: 'Gone Girl',
      year: 2020
    },
    {
      id: 'a2c1b009-69ee-4981-b11e-67557609d954',
      title: 'Before Sunrise',
      year: 1962
    },
    {
      id: '4e8fc630-a1c8-43e1-a504-9526574bc83e',
      title: 'Fight Club',
      year: 1990
    },
    {
      id: '4513ff9f-b07d-4deb-9161-cd1c48236a00',
      title: 'Finding Nemo',
      year: 1990
    },
    {
      id: '6df69b89-0dfc-4008-b8ec-0413932103c7',
      title: 'Die Hard',
      year: 1977
    },
    {
      id: 'baa5d339-28b2-4ee1-8b64-a2fa494a9750',
      title: 'Star Wars: Episode IV – A New Hope',
      year: 1972
    },
    {
      id: 'bb92e0d9-4756-4f38-baca-bce820355c1d',
      title: 'The Maltese Falcon',
      year: 1987
    }
  ];

  constructor() { }

  public getMovies(): Observable<Movie[]> {
    return of(this.movies).pipe(delay(1500));
  }

}
