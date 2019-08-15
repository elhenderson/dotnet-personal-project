import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { LineupService } from '../_services/lineup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  loginMode = false;

  constructor(private http: HttpClient, private authService: AuthService, private lineupService: LineupService) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }

  loginToggle() {
    this.loginMode = true;
  }


  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  cancelLoginMode(loginMode: boolean) {
    this.loginMode = loginMode;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }



}
