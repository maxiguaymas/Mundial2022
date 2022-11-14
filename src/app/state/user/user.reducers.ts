import { createReducer, on } from "@ngrx/store";
import { UserState } from "./user.state";
import * as userActions from "./user.actions";

export const initialState: UserState = {
    album: null,
    isLoading: false,
    isError: null
};

export const userAlbumReducer = createReducer(
    initialState,
    on(userActions.userAlbumAction, (state) => {
        return{
            ...state,
            isLoading: true,
            isError: null
        }
    }),
    on(userActions.userAlbumSuccessAction, (state,{album}) => {
        return{
            ...state,
            album: album,
            isLoading: false,
        }
    }),
    on(userActions.userAlbumErrorAction, (state, {message}) => {
        return{
            ...state,
            isLoading: false,
            isError: message,
        }
    }),
    on(userActions.userAlbumUpdateAction, (state, {album}) => {
        return{
            ...state,
            album: album,
            isLoading: true
        }
    }),
    on(userActions.userAlbumUpdateSuccessAction, (state) => {
        return{
            ...state,
            isLoading: false
        }
    }),
);