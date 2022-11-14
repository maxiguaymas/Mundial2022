import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserState } from "./user.state";



export const selectUserAlbumFeature = (state: AppState) => state.user;

export const selectUserAlbum = createSelector(
    selectUserAlbumFeature,
    (state : UserState) => state.album
);

export const selectLoadingUserAlbum = createSelector(
    selectUserAlbumFeature,
    (state : UserState) => state.isLoading
);

export const selectErrorUserAlbum = createSelector(
    selectUserAlbumFeature,
    (state : UserState) => state.isError
);