import { api } from '@utils/api';
import { getCredentials } from './queries';
import type {IUserLoginService} from './interfaces';


export default class UserLoginService implements IUserLoginService {
    async login(email: string, password: string): Promise<any> {
        const { data: { loginUser: res } } = await api(getCredentials(email, password));
        return res;
    }
}