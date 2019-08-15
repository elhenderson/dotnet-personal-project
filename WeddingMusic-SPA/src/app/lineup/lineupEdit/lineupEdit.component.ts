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
      this.lineup.prelude = this.lineup.prelude.split('|');
      this.lineup.family = this.lineup.family.split('|');
      this.lineup.bridalParty = this.lineup.bridalParty.split('|');
      this.lineup.processional = this.lineup.processional.split('|');
      this.lineup.unity = this.lineup.unity.split('|');
      this.lineup.recessional = this.lineup.recessional.split('|');
    });
  }

  updateLineup() {
    this.lineupService.updateLineup(this.authService.decodedToken.nameid, this.lineup).subscribe(next => {
      this.alertify.success('Lineup successfully updated!');
      this.editForm.reset(this.lineup);
      this.router.navigate(['lineup']);
    });
  }

  cancel() {
    this.cancelLineupEdit.emit(false);
  }

  removeSong(index, section) {
    
    console.log([section]);
    console.log(index);
  }
}
