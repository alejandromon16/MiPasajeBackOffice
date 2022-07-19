import { gql } from 'graphql-request';

export const getAllLocations = () => {
    return gql`
        {
            locations{
                _id
                name
            }
        }
    `
}
