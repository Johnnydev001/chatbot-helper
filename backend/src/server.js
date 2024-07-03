//import {messageSchema} from "./schemas/MessageSchema";
//import {messageResolver} from "./resolvers/MessageResolver";

import express from 'express';
import {ApolloServer} from 'apollo-server-express';

const app = express();

// const server = new ApolloServer({
//     typeDefs: messageSchema,
//     resolvers: {
//         messageResolver
//     }
// })
//
// server.applyMiddleware({
//     app
// })

app.get('/', (req,res) => {
    res.status(200).send('Hello World');
})

app.listen('4000', () => {
    console.log('Server is running on port 3000');
})




