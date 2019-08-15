import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lineup } from '../_models/lineup';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LineupService {
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService()

  constructor(private http: HttpClient) { }

  getLineup(id): Observable<Lineup> {
    return this.http.get<Lineup>(this.baseUrl + 'lineup/' + id);

  }

  editLineup(id): Observable<Lineup> {
    return this.http.get<Lineup>(this.baseUrl + 'lineup/' + id + '/edit/');
  }

  updateLineup(id: number, lineup: Lineup) {
    return this.http.put(this.baseUrl + 'lineup/' + id, lineup);
  }

  createLineup(userId) {
    return this.http.post(this.baseUrl + 'lineup/' + +userId, {});
  }
}
