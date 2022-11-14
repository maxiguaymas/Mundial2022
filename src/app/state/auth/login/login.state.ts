import { LoginData } from "src/app/models/login-data";


export interface LoginState {
    loginData: LoginData | null;
    isLoading: boolean;
    isError: string | null;
}