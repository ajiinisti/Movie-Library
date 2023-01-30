import "reflect-metadata"
import { buildSchema } from "type-graphql"
import express from "express"
import { graphqlHTTP } from "express-graphql"
import { ActorResolver } from "./Actors/actors.resolvers"
import { AuthorResolver } from "./Authors/authors.resolvers"
import { MovieResolver } from "./Movies/movies.resolvers"

async function main() {
    const schema = await buildSchema({
        resolvers: [ActorResolver, AuthorResolver, MovieResolver],
        emitSchemaFile: true,
    })

    const app = express()

    app.use(
        "/graphql",
        graphqlHTTP({
            schema: schema,
            graphiql: true,
        })
    )

    app.listen(3001)

    console.log("Running a GraphQL API server at http://localhost:8000/graphql")
}

main()