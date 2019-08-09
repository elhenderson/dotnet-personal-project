import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/_models/song';
import { SongService } from 'src/app/_services/song.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() song: Song;

  constructor(private songService: SongService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.addSong();
  }

//   addSong() {
//     this.songService.getSong(+this.route.snapshot.params['id']).subscribe((song: Song) => {
//       this.song = song;
//     }, error => {
//       this.alertify.error(error);
//     })
//   }

}
