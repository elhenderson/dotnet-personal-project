import { Component, OnInit } from '@angular/core';
import { SongService } from '../../_services/song.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Song } from '../../_models/song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  songs: Song[];
  token: any;

  constructor(private songService: SongService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadSongs();
  }

  loadSongs() {
    this.songService.getSongs().subscribe((songs: Song[]) => {
      this.songs = songs;
    }, error => {
      this.alertify.error(error);
    });
  }
}
