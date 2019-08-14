import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/_models/song';
import { SongService } from 'src/app/_services/song.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/_services/auth.service';





@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() song: Song;

  constructor(private songService: SongService, private alertify: AlertifyService, private route: ActivatedRoute,
     http: HttpClient, private authService: AuthService) { }

  ngOnInit() {

  }

  saveSong(songId: number) {
    this.songService.savedSong(this.authService.decodedToken.nameid, songId).subscribe(data => {
      this.alertify.success('You have saved ' + this.song.title);
    }, error => {
      this.alertify.error(error);
    });
  }

  // attempting to retrieve the previewUrl directly from backend results in a 500 error
  previewSong(title, artist) {
    this.songService.getSpotify(title, artist).subscribe((res: Response) => {
      // @ts-ignore
      if (res.preview_url !== null) {
        // @ts-ignore
        window.open(res.preview_url, '_blank', 'top=500,left=500,width=200,height=100');
        // @ts-ignore
      } else if (res.preview_url === null) {
        this.songService.getSpotifyAlt(title, artist).subscribe((response: Response) => {
          // @ts-ignore
          if (response.preview_url !== null) {
          // @ts-ignore
            window.open(response.preview_url, '_blank', 'top=500,left=500,width=200,height=100');
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
