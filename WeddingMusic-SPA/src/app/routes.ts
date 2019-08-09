import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LineupComponent } from './lineup/lineup.component';
import { SongComponent } from './songs/song/song.component';
import { SavedSongsComponent } from './saved-songs/saved-songs.component';
import { AuthGuard } from './_guards/auth.guard';
import { LineupEditResolver } from './_resolvers/lineupEdit.resolver';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'lineup', component: LineupComponent},
      {path: 'lineup/edit', component: LineupEditComponent, resolve: {lineup: LineupEditResolver}},
      {path: 'songs', component: SongComponent},
      {path: 'saved-songs', component: SavedSongsComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
