const {messageResolver} = require("./resolvers/MessageResolver")
const {messageSchema} = require("./schemas/MessageSchema")
const express = require('express');
const {ApolloServer} = require('apollo-server-express');

const app = express();

const server = new ApolloServer({
    typeDefs: messageSchema,
    resolvers: {
        messageResolver
    }
})

server.applyMiddleware({
    app
})

app.get('/', (req,res) => {
    res.status(200).send('Hello World');
})

app.listen('3000', () => {
    console.log('Server is running on port 3000');
})




