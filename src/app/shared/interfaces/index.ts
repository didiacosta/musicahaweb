export declare type STATUS = 'success' | 'warning' | 'error' | 'info';

export interface Respuesta<T> {
    status: STATUS;
    message: string;
    data: T;
}