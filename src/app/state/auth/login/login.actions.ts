import { createAction, props } from '@ngrx/store';
import { LoginData } from 'src/app/models/login-data';

export const loginAction = createAction(
  '[Login] LoginAction',
  props<{ data: LoginData }>()
);


export const loginSuccessAction = createAction('[Login] LoginSuccessAction');

export const loginErrorAction = createAction(
    '[Login] LoginErrorAction',
    props<{ message: string }>()
);