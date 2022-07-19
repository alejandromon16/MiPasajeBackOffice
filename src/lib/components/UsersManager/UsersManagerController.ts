import type { IUsersManagerService } from './interfaces';
import UsersManager from './UsersManager';
import validator from 'validator';

export default class UsersManagerController extends UsersManager{
    private userManagerService: IUsersManagerService;
    passwordValid = '';
    private errors = {
        name: '',
        email: '',
        password: ''
    }

    constructor(userManagerService: IUsersManagerService) {
        super()
        this.userManagerService = userManagerService;
    }

    createUser(){
        const data = {
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role
        };

        return this.userManagerService.createUser(data);
    }

    validData(){
        let valid = true

        if(validator.isEmpty(this.name)){
            valid = false;
            this.errors.name = 'Por favor Ingrese un nombre.';
        }else{
            this.errors.name = '';
        }

        if(!validator.isEmail(this.email)){
            valid = false;
            this.errors.email = 'Por favor Ingrese un correo valido.';
        }else{
            this.errors.email = '';
        }

        if(validator.isEmpty(this.password)){
            valid = false;
            this.errors.password = 'Por favor Ingrese una contraseña';
        }else{
            this.errors.password = '';
        }

        if(!validator.isEmpty(this.password) && this.password != this.passwordValid){
            valid = false;
            this.errors.password = 'Las contraseñas no coinciden';
        }


        return valid
    }

    getErrors(){
        return this.errors;
    }

    remove(){
        return this.userManagerService.deleteUser(this.id);
    }
}