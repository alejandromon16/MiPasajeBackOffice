import type { IUser, Role } from "./interfaces";


export default class UsersManager implements IUser {
    name = '';
    id = '';
    email = '';
    password = '';
    role:Role = 'CLIENT' ;

}