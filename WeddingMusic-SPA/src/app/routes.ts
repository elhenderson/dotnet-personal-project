import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LineupComponent } from './lineup/lineup.component';
import { BrowseMusicComponent } from './browse-music/browse-music.component';
import { SavedSongsComponent } from './saved-songs/saved-songs.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'lineup', component: LineupComponent},
      {path: 'browse-music', component: BrowseMusicComponent},
      {path: 'saved-songs', component: SavedSongsComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
