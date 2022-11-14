import { createSelector } from "@ngrx/store";
import { AppState } from "../../app.state";
import { RegisterState } from "./register.state";


export const selectRegisterFeature = (state: AppState) => state.register;

export const selectLoadingRegister = createSelector(
    selectRegisterFeature,
    (state : RegisterState) => state.isLoading
);

export const selectErrorRegister = createSelector(
    selectRegisterFeature,
    (state : RegisterState) => state.isError
);