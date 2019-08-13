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

  constructor(private songService: SongService, private alertify: AlertifyService, private route: ActivatedRoute, http: HttpClient) { }

  ngOnInit() {

  }

  previewSong(title, artist) {
    this.songService.getSpotify(title, artist).subscribe((res: Response) => {
      if (res.preview_url !== null) {
        window.open(res.preview_url, '_blank', 'top=500,left=500,width=200,height=100');
      } else if (res.preview_url === null) {
        this.songService.getSpotifyAlt(title, artist).subscribe((res: Response) => {
          if (res.preview_url !== null) {
            window.open(res.preview_url, '_blank', 'top=500,left=500,width=200,height=100');
          } else {
            this.alertify.error('Sorry, there is no sample for this selection');
          }
        });
      } else {
        this.alertify.error('Sorry, there is no sample for this selection');
      }
    });
  }

}
