import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { Album } from 'src/app/models/album';
import { UserResponse } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import * as userActions from './user.actions';

@Injectable()
export class UserAlbumEffects {

    loadAlbum$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.userAlbumAction),
        exhaustMap((action) => 
            this.userService.getAlbum(action.email).pipe(
                map((response:UserResponse) => {
                    console.log(response);
                    const album: Album = response.user.album;
                    return userActions.userAlbumSuccessAction({album:album});
                }),
                catchError((error) =>
                    of(userActions.userAlbumErrorAction({
                        message: 'username o email ya se encuentra en uso.'
                    }))
                )
            )
          )
        )
    );

    updateAlbum$ = createEffect(() => this.actions$.pipe(
      ofType(userActions.userAlbumUpdateAction),
      exhaustMap((action) => 
          this.userService.updateAlbum(action.album).pipe(
              map((response:UserResponse) => {
                  console.log(response);
                  return userActions.userAlbumUpdateSuccessAction();
              }),
              catchError((error) =>
                  of(userActions.userAlbumErrorAction({
                      message: 'Error al actualizar album.'
                  }))
              )
          )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
}