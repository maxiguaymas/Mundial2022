import { createReducer, on } from "@ngrx/store";
import { LoginState } from "./login.state";
import * as loginActions from "./login.actions";

export const initialState: LoginState = {
    loginData: null,
    isLoading: false,
    isError: null
};

export const loginReducer = createReducer(
    initialState,
    on(loginActions.loginAction, (state, {data}) => {
        return{
            ...state,
            loginData: data,
            isLoading: true,
            isError: null
        }
    }),
    on(loginActions.loginSuccessAction, (state) => {
        return{
            ...state,
            isLoading: false,
        }
    }),
    on(loginActions.loginErrorAction, (state, {message}) => {
        return{
            ...state,
            isLoading: false,
            isError: message,
        }
    })
);