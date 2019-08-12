import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/_models/song';
import { SongService } from 'src/app/_services/song.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() song: Song;
  token: any;

  constructor(private songService: SongService, private alertify: AlertifyService, private route: ActivatedRoute, http: HttpClient) { }

  ngOnInit() {
  }

  previewSong(title) {
    this.songService.getSpotify(title).subscribe((res: Response) => {
     return console.log(res);
    });
  }

}
