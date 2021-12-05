export type Roles = 'SUSCRIPTOR' | 'ADMIN';

export interface User{
    email: string;
    password: string;
}

export interface UserResponse {
    email: string;
    token: string;
}