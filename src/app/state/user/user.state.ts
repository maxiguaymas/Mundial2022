import { Album } from "src/app/models/album";



export interface UserState {
    album: Album | null;
    isLoading: boolean;
    isError: string | null;
}