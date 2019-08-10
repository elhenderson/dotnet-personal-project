import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LineupComponent } from './lineup/lineup.component';
import { SongComponent } from './songs/song/song.component';
import { SavedSongsComponent } from './saved-songs/saved-songs.component';
import { AuthGuard } from './_guards/auth.guard';
import { LineupResolver } from './_resolvers/lineup.resolver';
import { LineupEditComponent } from './lineup/lineupEdit/lineupEdit.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'lineup/:id', component: LineupComponent, resolve: {LineupResolver}},
      {path: 'lineup/edit', component: LineupEditComponent, resolve: {lineup: LineupResolver}},
      {path: 'songs', component: SongComponent},
      {path: 'saved-songs', component: SavedSongsComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
