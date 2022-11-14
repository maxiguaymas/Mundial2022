import { RegisterData } from "src/app/models/register-data";


export interface RegisterState {
    registerData: RegisterData | null;
    isLoading: boolean;
    isError: string | null;
}
