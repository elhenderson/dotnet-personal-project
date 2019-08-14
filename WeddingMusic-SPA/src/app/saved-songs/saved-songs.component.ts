import { Component, OnInit } from '@angular/core';
import { Song } from '../_models/song';
import { PaginatedResult, Pagination } from '../_models/pagination';
import { AuthService } from '../_services/auth.service';
import { SongService } from '../_services/song.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-saved-songs',
  templateUrl: './saved-songs.component.html',
  styleUrls: ['./saved-songs.component.css']
})
export class SavedSongsComponent implements OnInit {
  songs: Song[];
  pagination: Pagination;
  savedParam: string;
  songParams: any = {};
  genreList = [
    {value: null, display: 'All'},
    {value: 'metal', display: 'Metal'},
    {value: 'classical', display: 'Classical'}
  ];
  orderList = [
    {value: 'title', display: 'Title'},
    {value: 'artist', display: 'Artist'}
  ];

  constructor(private authService: AuthService, private songService: SongService, 
    private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.songs = data['song'].result;
      this.pagination = data['song'].pagination;
    });
    this.savedParam = 'Saved';
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadSongs();
  }

  resetFilters() {
    this.songParams.orderBy = 'title';
    this.songParams.genre = '';
    this.loadSongs();
  }

  loadSongs() {
    this.songService.getSongs(this.pagination.currentPage, this.pagination.itemsPerPage,
       this.songParams, this.savedParam, this.authService.decodedToken.nameid)
    .subscribe((res: PaginatedResult<Song[]>) => {
      this.songs = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }

}
