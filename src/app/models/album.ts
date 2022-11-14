import { Jugador } from "./jugador";

export interface Pais{
    pais: string;
    fig_completadas: number;
    jugadores: Jugador[];
}

export interface Album {
    fig_completadas: number;
    paises: Pais[];
}
