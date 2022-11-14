import { createAction, props } from '@ngrx/store';
import { Album } from 'src/app/models/album';


export const userAlbumAction = createAction(
    '[User] LoadAlbumAction',
    props<{ email: string }>()
);
  
export const userAlbumSuccessAction = createAction(
    '[User] LoadAlbumSuccessAction',
    props<{ album: Album }>()
    );
  
export const userAlbumErrorAction = createAction(
    '[User] LoadAlbumError',
    props<{ message: string }>()
);

export const userAlbumUpdateAction = createAction(
    '[User] UpdateAlbum',
    props<{ album: Album }>()
);

export const userAlbumUpdateSuccessAction = createAction('[User] UpdateAlbumSuccess');