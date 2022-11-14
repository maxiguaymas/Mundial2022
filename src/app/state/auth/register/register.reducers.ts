import { createReducer, on } from "@ngrx/store";
import { RegisterState } from "./register.state";
import * as registerActions from "./register.actions";

export const initialState: RegisterState = {
    registerData: null,
    isLoading: false,
    isError: null
};

export const registerReducer = createReducer(
    initialState,
    on(registerActions.registerAction, (state, {data}) => {
        return{
            ...state,
            registerData: data,
            isLoading: true,
            isError: null
        }
    }),
    on(registerActions.registerSuccessAction, (state) => {
        return{
            ...state,
            isLoading: false,
        }
    }),
    on(registerActions.registerErrorAction, (state, {message}) => {
        return{
            ...state,
            isLoading: false,
            isError: message,
        }
    })
);