import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { loginResponse } from 'src/app/models/loginResponse';
import { DialogComponent } from 'src/app/modules/material/dialog/dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import * as loginActions from './login.actions';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginActions.loginAction),
    exhaustMap((action) => 
        this.authService.login(action.data).pipe(
            map((response: loginResponse) => {
                localStorage.setItem('token',response.token);
                localStorage.setItem('username',response.username);
                localStorage.setItem('email',response.email);
                return loginActions.loginSuccessAction();
            }),
            catchError(() =>
                of(loginActions.loginErrorAction({
              message: 'email o password incorrecto'
              })),
            ),

        )
      )
    )
  );

  loginError$ = createEffect(() => this.actions$.pipe(
    ofType(loginActions.loginErrorAction),
    tap((_) => {
      this.dialog.open(DialogComponent,{
        width: '300px',
        data: {message: 'Email o Contraseña incorrecta.'}
      });
    })
   ),
   {dispatch: false}
  );

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(loginActions.loginSuccessAction),
    tap((_) => {
        this.router.navigate(['usuario/mi-album']);
    })
   ),
   {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
  ) {}
}