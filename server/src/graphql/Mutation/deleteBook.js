const knex = require("../../db/knex")

const addBook = async (_, { id }) => {
  try {
    await knex("books").where({ id }).del()
  } catch (err) {
    console.error(err.message)
  }
  return { id }
}

module.exports = addBook
