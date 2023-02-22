import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { LoginData } from 'src/app/models/login-data';
import { AppState } from 'src/app/state/app.state';
import { loginAction } from 'src/app/state/auth/login/login.actions';
import { selectErrorLogin, selectLoadingLogin } from 'src/app/state/auth/login/login.selectors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm!: FormGroup;
  public isLoading$: Observable<boolean>;
  public isError$: Observable<string | null>;

  constructor(private formBuilder:FormBuilder, private store: Store<AppState>) {
    this.isLoading$ = this.store.select(selectLoadingLogin);
    this.isError$ = this.store.select(selectErrorLogin);
   }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6)
      ])
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login(form:any){
    let data: LoginData = form.value;
    this.store.dispatch(loginAction({data}));
  }

}
