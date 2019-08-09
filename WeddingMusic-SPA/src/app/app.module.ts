import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {BsDropdownModule} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { SongComponent } from './songs/song/song.component';
import { SavedSongsComponent } from './saved-songs/saved-songs.component';
import { LineupComponent } from './lineup/lineup.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { SongService } from './_services/song.service';
import { SongCardComponent } from './songs/song-card/song-card.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AddSongComponent } from './songs/addSong/addSong.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      RegisterComponent,
      SongComponent,
      SongCardComponent,
      SavedSongsComponent,
      LineupComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5001'],
            blacklistedRoutes: ['localhost:5001/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      MatDatepickerModule,
      ErrorInterceptorProvider,
      AuthGuard,
      UserService,
      SongService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
