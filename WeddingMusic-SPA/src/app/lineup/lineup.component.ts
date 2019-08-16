import { Component, OnInit } from '@angular/core';
import { Lineup } from '../_models/lineup';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private authService: AuthService, private lineupService: LineupService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.lineup = data['lineup'];
      this.lineup.prelude = this.lineup.prelude.split('|').filter((el) => el.length !== 0);
      this.lineup.family = this.lineup.family.split('|').filter((el) => el.length !== 0);
      this.lineup.bridalParty = this.lineup.bridalParty.split('|').filter((el) => el.length !== 0);
      this.lineup.processional = this.lineup.processional.split('|').filter((el) => el.length !== 0);
      this.lineup.unity = this.lineup.unity.split('|').filter((el) => el.length !== 0);
      this.lineup.recessional = this.lineup.recessional.split('|').filter((el) => el.length !== 0);
      console.log(this.lineup.prelude);
      if (this.lineup == null) {
        console.log("this is null")
        console.log(this.authService.decodedToken.nameid);
        return this.lineupService.createLineup(this.authService.decodedToken.nameid);
      }
      console.log(this.lineup);
    });
  }

  lineupEditToggle() {
    this.lineupEditMode = true;
  }

  cancelLineupEditMode(lineupEditMode: boolean) {
    this.lineupEditMode = lineupEditMode;
  }
}
