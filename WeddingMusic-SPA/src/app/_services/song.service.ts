import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Song } from '../_models/song';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};


@Injectable({
  providedIn: 'root'
})
export class SongService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSongs(page?, itemsPerPage?, songParams): Observable<PaginatedResult<Song[]>> {
    const paginatedResult: PaginatedResult<Song[]> = new PaginatedResult<Song[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }



    if (songParams != null) {
      if (songParams.genre !== 'all') {
        params = params.append('genre', songParams.genre);
      }
    }

    return this.http.get<Song[]>(this.baseUrl + 'songs/', {observe: 'response', params})
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
  }

  getSong(id): Observable<Song> {
    return this.http.get<Song>(this.baseUrl + 'songs/' + id, httpOptions);
  }

  getSpotify(title, artist) {
    const track = this.http.get(this.baseUrl + 'spotify/' + title + ' ' + artist);
    return track;
  }
  getSpotifyAlt(title, artist) {
    const track = this.http.get(this.baseUrl + 'spotify/alt/' + title + ' ' + artist);
    return track;
  }

}
