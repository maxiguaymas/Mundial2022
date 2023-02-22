import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { DialogComponent } from 'src/app/modules/material/dialog/dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import * as registerActions from './register.actions';

@Injectable()
export class RegisterEffects {

    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerActions.registerAction),
        exhaustMap((action) => 
            this.authService.register(action.data).pipe(
                map((response) => {
                    this.dialog.open(DialogComponent,{
                        width: '300px',
                        data: {message: 'Registrado con exito.'}
                      });
                    this.userService.createAlbum(action.data.email).subscribe(
                        response => {
                        }
                    )
                    return registerActions.registerSuccessAction();
                }),
                catchError((error) =>
                    of(registerActions.registerErrorAction({
                        message: 'username o email ya se encuentra en uso.'
                    }))
                )
            )
          )
        )
    );

    registerError$ = createEffect(() => this.actions$.pipe(
        ofType(registerActions.registerErrorAction),
        tap((_) => {
            this.dialog.open(DialogComponent,{
                width: '330px',
                data: {message: `Email o nombre de usuario ya se encuentra en uso.`}
              });
        })
       ),
       {dispatch: false}
      );

    registerSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(registerActions.registerSuccessAction),
        tap((_) => {
            this.router.navigate(['login']);
        })
       ),
       {dispatch: false}
      );



  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
  ) {}
}