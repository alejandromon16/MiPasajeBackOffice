export type Role = 'CLIENT' | 'ADMIN' | 'SUPER_ADMIN';

export interface IUser {
    name: string;
    email: string;
    password: string;
    id: string;
    role: Role;
}