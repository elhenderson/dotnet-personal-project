import { Component, OnInit, ViewChild, Output, EventEmitter, HostListener } from '@angular/core';
import { Lineup } from 'src/app/_models/lineup';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { LineupService } from 'src/app/_services/lineup.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-lineup-edit',
  templateUrl: './lineupEdit.component.html',
  styleUrls: ['./lineupEdit.component.css']
})
export class LineupEditComponent implements OnInit {
  @Output() cancelLineupEdit = new EventEmitter();
  @ViewChild('editForm') editForm: NgForm;
  lineup: Lineup;
  updateSection: any;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute,private router: Router, private alertify: AlertifyService,
     private lineupService: LineupService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.lineup = data['lineup'];
      this.lineup.prelude = this.lineup.prelude.split('|').filter((el) => el.length !== 0);
      this.lineup.family = this.lineup.family.split('|').filter((el) => el.length !== 0);
      this.lineup.bridalParty = this.lineup.bridalParty.split('|').filter((el) => el.length !== 0);
      this.lineup.processional = this.lineup.processional.split('|').filter((el) => el.length !== 0);
      this.lineup.unity = this.lineup.unity.split('|').filter((el) => el.length !== 0);
      this.lineup.recessional = this.lineup.recessional.split('|').filter((el) => el.length !== 0);
    });
  }

  updateLineup(sectionNames) {
    for (let i = 0; i < sectionNames.length; i++) {
      if (this.lineup[sectionNames[i]].length) {
        const joinedSongArray = this.lineup[sectionNames[i]].join('|');
        this.lineup[sectionNames[i]] = joinedSongArray;
      } else {
        const joinedNoSongArray = this.lineup[sectionNames[i]].toString();
        this.lineup[sectionNames[i]] = joinedNoSongArray;
      }
    }
    this.lineupService.updateLineup(this.authService.decodedToken.nameid, this.lineup).subscribe(next => {
      this.alertify.success('Lineup successfully updated!');
      this.editForm.reset(this.lineup);
      this.router.navigate(['lineup']);
    });
  }

  cancel() {
    this.cancelLineupEdit.emit(false);
  }

  removeSong(songIndex, section, sectionName) {
    console.log(this.lineup[sectionName]);
    const removedItemArray = section.filter((song, index) => song[index] !== song[songIndex]);
    const joinArray = removedItemArray.join('|');
    console.log(joinArray);
    this.updateSection = joinArray;
    this.lineup[sectionName] = this.updateSection.split('|').filter((el) => el.length !== 0);
    console.log(this.lineup.prelude);
  }
}
