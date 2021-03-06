import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {BsDropdownModule, BsDatepickerModule, PaginationModule, ModalModule} from 'ngx-bootstrap';
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
import { LineupEditComponent } from './lineup/lineupEdit/lineupEdit.component';
import { LineupService } from './_services/lineup.service';
import { LineupResolver } from './_resolvers/lineup.resolver';
import { LoginComponent } from './login/login.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { SongResolver } from './_resolvers/song.resolver';
import { SavedSongResolver } from './_resolvers/savedSong.resolver';

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
      LineupComponent,
      LineupEditComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      PaginationModule.forRoot(),
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      ModalModule.forRoot(),
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
      SongService,
      LineupService,
      LineupResolver,
      PreventUnsavedChanges,
      SongResolver,
      SavedSongResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
