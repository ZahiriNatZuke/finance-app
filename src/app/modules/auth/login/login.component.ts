import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../shared/interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hidePwd: boolean = true;
  returnURL: string;

  constructor(private _formBuilder: FormBuilder, private authService: AuthService,
              private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.returnURL = this._activatedRoute.snapshot.queryParamMap.get('returnUrl') || '/finance';
    this.loginForm = this._formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  LoginRequest(): void {
    this.authService.Login(this.loginForm.value)
      .subscribe((response: User) => {
        this.authService.userUpdate = response;
        this._router.navigate([this.returnURL]);
      });
  }

}
