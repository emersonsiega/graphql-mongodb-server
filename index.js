import express from "express"
import expressGraphQL from "express-graphql"
import bodyParser from "body-parser"
import cors from "cors"

import schema from "./graphql/";
import configureDB from './db/connection'

const app = express()

configureDB()

app.use(
    "/*",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
)

const PORT = process.env.PORT || "4000"
app.listen( PORT, () => console.log( `Server running on port ${PORT}` ) )