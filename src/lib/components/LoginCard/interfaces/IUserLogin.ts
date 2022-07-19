export default interface IUserLogin{
    email: string;
    password: string;
    wrongData: boolean;
    id: string;
    role: string;
    token: string;
}