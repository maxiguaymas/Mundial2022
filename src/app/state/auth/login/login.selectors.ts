import { createSelector } from "@ngrx/store";
import { AppState } from "../../app.state";
import { LoginState } from "./login.state";


export const selectLoginFeature = (state: AppState) => state.login;

export const selectLoadingLogin = createSelector(
    selectLoginFeature,
    (state : LoginState) => state.isLoading
);

export const selectErrorLogin = createSelector(
    selectLoginFeature,
    (state : LoginState) => state.isError
);

