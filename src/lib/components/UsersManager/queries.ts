import { gql } from "graphql-request";
import type { IUser } from "./interfaces";

export const getAllUsers = () => {
    return gql`
        {
            users{
                _id
                email
                name
                role
            }
        }
    `
}

export const deleteUser = (id: string) => {
    return gql`
        mutation{
            deleteUser(
                id: "${id}"
            ){
                _id
            }
        }
    `
}

export const createUser = (user:IUser) => {
    if(user.role === 'SUPER_ADMIN'){
        return gql`
            mutation{
                addUser(
                    input:{
                        name: "${user.name}",
                        email: "${user.email}",
                        password: "${user.password}",
                        role: SUPER_ADMIN
                    }
                ){
                    _id
                }
            }`
    }

    if(user.role === 'ADMIN'){
        return gql`
            mutation{
                addUser(
                    input:{
                        name: "${data.name}",
                        email: "${data.email}",
                        password: "${data.password}",
                        role: ADMIN
                    }
                ){
                    _id
                }
            }`
    }

    if(user.role === 'CLIENT'){
        return gql`
            mutation{
                addUser(
                    input:{
                        name: "${data.name}",
                        email: "${data.email}",
                        password: "${data.password}",
                        role: CLIENT
                    }
                ){
                    _id
                }
            }`
    }
    

}