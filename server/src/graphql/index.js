const { Query } = require("./Query")
const { Mutation } = require("./Mutation")
const { GraphQLScalarType } = require("graphql")

const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "A date represented as locale date string",
    serialize: (value) => value.toLocaleDateString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value),
  }),
  Query,
  Mutation,
}
module.exports = { resolvers }
