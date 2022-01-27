import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  getFeacture(){

    // eslint-disable-next-line max-len
    return this.http.request('GET',`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=21058609bdf5a7d03fdc629ce12bef3e`);

  }
}
