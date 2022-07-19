import {gql} from 'graphql-request';

const getCredentials = (name:string, password:string) => {
	return gql`
		mutation {
			loginUser(input:{
				name: "${name}"
				password: "${password}"
			}) {
				token
				_id
				role
			}
		}
	`;
};

const getRole = (userId:string) => {
    return gql`
        {
        giveMeRole(userId: "${userId}")
        }
    `

};

const getValidToken = (token:string) => {
    return gql`
    {
        validToken(token: "${token}")
    }

    `
}

export {
	getCredentials,
	getValidToken,
	getRole
}
