import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { Song } from '../_models/song';
import { SongService } from '../_services/song.service';

@Injectable()
export class SavedSongResolver implements Resolve<Song[]> {
  pageNumber = 1;
  pageSize = 5;
  savedParam = 'Saved';
  userId = 0;

  constructor(private songService: SongService, private router: Router,
    private alertify: AlertifyService, private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Song[]> {
    this.userId = this.authService.decodedToken.nameid;
    return this.songService.getSongs(this.pageNumber, this.pageSize, null, this.savedParam, this.userId).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }

}
