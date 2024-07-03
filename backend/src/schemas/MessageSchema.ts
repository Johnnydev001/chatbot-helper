const {gql} = require('apollo-server-express');

export const messageSchema = gql`

    type Message{
        sender: String!
        text: String!
        time: String!
    }
    
    type Query{
            messages: [Message!]!
            chat(message: String!): Message!
    }
`