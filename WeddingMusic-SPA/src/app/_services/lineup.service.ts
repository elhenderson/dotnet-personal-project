import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lineup } from '../_models/lineup';

@Injectable({
  providedIn: 'root'
})
export class LineupService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getLineup(id): Observable<Lineup> {
    return this.http.get<Lineup>(this.baseUrl + 'lineup/' + id);
  }

}
