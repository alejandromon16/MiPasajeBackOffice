export default interface IUserLoginService {
    login(email: string, password: string): Promise<any>;
}
