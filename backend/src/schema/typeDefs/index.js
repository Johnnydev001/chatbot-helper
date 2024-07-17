
import {gql} from "apollo-server-express";

const typeDefs = gql(`

    type Query {
        getMessages: [String]

    }
    type Mutation {
        sendMessage(message: String!): String
    }
`)

export default typeDefs