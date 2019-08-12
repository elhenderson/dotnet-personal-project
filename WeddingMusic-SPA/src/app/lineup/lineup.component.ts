import { Component, OnInit } from '@angular/core';
import { Lineup } from '../_models/lineup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {
  lineup: Lineup;
  lineupEditMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.lineup = data['lineup'];
    });
  }

  lineupEditToggle() {
    this.lineupEditMode = true;
  }

  cancelLineupEditMode(lineupEditMode: boolean) {
    this.lineupEditMode = lineupEditMode;
  }
}
