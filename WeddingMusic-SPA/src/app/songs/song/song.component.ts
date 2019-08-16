import { Component, OnInit } from '@angular/core';
import { SongService } from '../../_services/song.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Song } from '../../_models/song';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { ignoreElements } from 'rxjs/operators';
import { LineupService } from 'src/app/_services/lineup.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  songs: Song[];
  songParams: any = {};
  genreList = [
    {value: null, display: 'All'},
    {value: 'classical', display: 'Classical'},
    {value: 'pop', display: 'Pop'},
    {value: 'rock', display: 'Rock'},
    {value: 'blues', display: 'Blues'}
  ];
  orderList = [
    {value: 'title', display: 'Title'},
    {value: 'artist', display: 'Artist'}
  ];
  pagination: Pagination;

  constructor(private songService: SongService, private alertify: AlertifyService,
     private route: ActivatedRoute, private lineupService: LineupService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.songs = data['song'].result;
      this.pagination = data['song'].pagination;
    }, error => {
      this.alertify.error(error);
    });
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
    this.songService.getSongs(this.pagination.currentPage, this.pagination.itemsPerPage, this.songParams, null, null)
    .subscribe((res: PaginatedResult<Song[]>) => {
      this.songs = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }

}
