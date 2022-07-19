import type { Role } from './index';
import type { IUser } from './IUsersManager';

export interface IUsersManagerService {
    createUser( data:IUser): Promise<any>;
    deleteUser( id: string): Promise<any>;
}
