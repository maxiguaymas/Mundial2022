import { ActionReducerMap } from "@ngrx/store";
import { loginReducer } from "./auth/login/login.reducers";
import { LoginState } from "./auth/login/login.state";
import { registerReducer } from "./auth/register/register.reducers";
import { RegisterState } from "./auth/register/register.state";
import { userAlbumReducer } from "./user/user.reducers";
import { UserState } from "./user/user.state";


export interface AppState {
    login: LoginState,
    register: RegisterState,
    user: UserState
}


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    login: loginReducer,
    register: registerReducer,
    user: userAlbumReducer
};