import { api } from '@utils/api';
import { createUser, deleteUser } from './queries';
import type {IUser, IUsersManagerService} from './interfaces';


export default class UserLoginService implements IUsersManagerService {
    async createUser(
        data: IUser
    ): Promise<any> {

        const res = await api(createUser(data));
        console.log('try', res)
        return res;
    }

    async deleteUser(id: string): Promise<any> {
        const res = await api(deleteUser(id));
        return res;
    }

}