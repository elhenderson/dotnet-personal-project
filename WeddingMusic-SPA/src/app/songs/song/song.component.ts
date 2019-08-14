import { Component, OnInit } from '@angular/core';
import { SongService } from '../../_services/song.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Song } from '../../_models/song';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  songs: Song[];
  songParams: any = {};
  genreList = [
    {value: 'all', display: 'All'},
    {value: 'metal', display: 'Metal'},
    {value: 'classical', display: 'Classical'}
  ];
  pagination: Pagination;

  constructor(private songService: SongService, private alertify: AlertifyService, private route: ActivatedRoute) { }

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
    this.loadSongs();
  }

  loadSongs() {
    this.songService.getSongs(this.pagination.currentPage, this.pagination.itemsPerPage, this.songParams)
    .subscribe((res: PaginatedResult<Song[]>) => {
      this.songs = res.result;
      this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }
}
