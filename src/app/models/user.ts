import { Album } from "./album";

export interface UserResponse {
    user: User;
    message: string;
}

export interface User {
    album: Album;
    email: string;
    _id: string;
}
