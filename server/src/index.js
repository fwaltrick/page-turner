require("dotenv").config()
const fs = require("fs")
const { ApolloServer } = require("apollo-server")
// const express = require("express")
// const { ApolloServer } = require("apollo-server-express")
// const { loadSchemaSync } = require("@graphql-tools/load")
// const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader")
// const { importSchema } = require("graphql-import")

const { resolvers } = require("./graphql")

const typeDefs = fs.readFileSync("./server/src/graphql/schema.graphql", {
  encoding: "utf-8",
})

const PORT = process.env.PORT || 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// const app = express()

// app.use("/", express.static("public"))
// server.applyMiddleware({ app })
// app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
