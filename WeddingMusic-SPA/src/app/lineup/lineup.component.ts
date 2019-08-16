import { Component, OnInit } from '@angular/core';
import { Lineup } from '../_models/lineup';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { LineupService } from '../_services/lineup.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {
  lineup: Lineup;
  lineupEditMode = false;
  sectionNames = ['prelude', 'family', 'bridalParty', 'processional', 'unity', 'recessional', 'postlude'];

  constructor(private route: ActivatedRoute, private authService: AuthService, private lineupService: LineupService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.lineup = data['lineup'];
      console.log(this.lineup);
      if (this.lineup == null) {
        console.log('this is null');
        return this.lineupService.createLineup(this.authService.decodedToken.nameid).subscribe(next => {
          window.location.reload();
        });
      }
      this.splitSongString();

      // this.lineup.prelude = this.lineup.prelude.split('|').filter((el) => el.length !== 0);
      // this.lineup.family = this.lineup.family.split('|').filter((el) => el.length !== 0);
      // this.lineup.bridalParty = this.lineup.bridalParty.split('|').filter((el) => el.length !== 0);
      // if (this.lineup.processional != null) {
      //   console.log('this is null')
      //   this.lineup.processional = this.lineup.processional.split('|').filter((el) => el.length !== 0);
      // }
      // if (this.lineup.unity != null) {
      //   this.lineup.unity = this.lineup.unity.split('|').filter((el) => el.length !== 0);
      // }

      // if (this.lineup.recessional != null) {
      //   this.lineup.recessional = this.lineup.recessional.split('|').filter((el) => el.length !== 0);
      // }


      // this.lineup.postlude = this.lineup.postlude.split('|').filter((el) => el.length !== 0);
    });
  }

  splitSongString() {
    for (let i = 0; i < this.sectionNames.length; i++) {
      if (this.lineup[this.sectionNames[i]] != null && this.lineup[this.sectionNames[i]] !== '') {
        this.lineup[this.sectionNames[i]] = this.lineup[this.sectionNames[i]].split('|').filter((el) => el.length !== 0);
      }
    }
  }

  lineupEditToggle() {
    this.lineupEditMode = true;
  }

  cancelLineupEditMode(lineupEditMode: boolean) {
    this.lineupEditMode = lineupEditMode;
  }
}
