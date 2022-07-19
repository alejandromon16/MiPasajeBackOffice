import type { IUserLoginService } from './interfaces';
import UserLoginData from './UserLogin';

export default class UserLoginController extends UserLoginData {
    private controlUserLogin: IUserLoginService;
    constructor(controlUserLogin: IUserLoginService) {
        super();
        this.controlUserLogin = controlUserLogin;
    }
    async login(): Promise<any> {
        const res:string = await this.controlUserLogin.login(this.email, this.password);
        this.wrongData = res ? false: true;
        return res;
    }
}
