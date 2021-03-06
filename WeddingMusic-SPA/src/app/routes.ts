import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LineupComponent } from './lineup/lineup.component';
import { SongComponent } from './songs/song/song.component';
import { SavedSongsComponent } from './saved-songs/saved-songs.component';
import { AuthGuard } from './_guards/auth.guard';
import { LineupResolver } from './_resolvers/lineup.resolver';
import { LineupEditComponent } from './lineup/lineupEdit/lineupEdit.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { SongResolver } from './_resolvers/song.resolver';
import { SavedSongResolver } from './_resolvers/savedSong.resolver';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'lineup', component: LineupComponent, resolve: {lineup: LineupResolver}},
      {path: 'lineup/edit', component: LineupEditComponent, resolve: {lineup: LineupResolver}, canDeactivate: [PreventUnsavedChanges]},
      {path: 'songs', component: SongComponent, resolve: {song: SongResolver}},
      {path: 'saved-songs', component: SavedSongsComponent, resolve: {song: SavedSongResolver}}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
