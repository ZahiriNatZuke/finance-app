import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  public bg: string = 'white';
  public userMenuOpened: boolean = false;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this._router.navigate(['/auth/login']);
  }
}
