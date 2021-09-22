import { DataState } from "../enum/data-state.enum";

export interface AppState<T> {
    dataState: DataState;
    appData?: T;
    error?: string;
}