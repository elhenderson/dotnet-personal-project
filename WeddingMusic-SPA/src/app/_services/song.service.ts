import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Song } from '../_models/song';

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

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.baseUrl + 'songs/', httpOptions);
  }

  getSong(id): Observable<Song> {
    return this.http.get<Song>(this.baseUrl + 'songs/' + id, httpOptions);
  }
}
