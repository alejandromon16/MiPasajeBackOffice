import type { IUserLogin } from './interfaces';
import { browser } from '$app/env';

export default class UserLogin implements IUserLogin {
    email: string = '';
    password: string = '';
    wrongData: boolean = false;
    id: string = '';
    role: string = '';
    token: string = '';
}