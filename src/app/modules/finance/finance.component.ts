import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/shared/services/auth.service';
import {User} from '../auth/shared/interfaces/User';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  public bg: string = 'white';
  public userMenuOpened: boolean = false;
  public authUser: User | null = null;

  constructor(private _router: Router, private authService: AuthService) {
    this.authService.userObservable.subscribe(user => this.authUser = user);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.LogOut();
  }
}
