import { createAction, props } from '@ngrx/store';
import { RegisterData } from 'src/app/models/register-data';

export const registerAction = createAction(
  '[Register] RegisterAction',
  props<{ data: RegisterData }>()
);


export const registerSuccessAction = createAction('[Register] RegisterSuccessAction');

export const registerErrorAction = createAction(
    '[Register] RegisterErrorAction',
    props<{ message: string }>()
);