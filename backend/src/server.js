
import express from 'express'
import {ApolloServer} from "apollo-server-express";
import typeDefs from "./schema/typeDefs/index.js";
import resolvers from "./schema/resolvers/index.js";
import cors from 'cors'

const startApolloServer = async () => {

    const app = express()
    app.use(cors())

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start()
    server.applyMiddleware({
        app
    })
    app.listen({ port: 4000 });
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);


}

await startApolloServer()
