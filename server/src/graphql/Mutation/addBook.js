const knex = require("../../db/knex")

const addBook = async (_, { input }) => {
  await knex("books").insert(input, "*")
  return input
}

module.exports = addBook
