const knex = require("../../db/knex")
const book = async (_, { id, progress }) => {
  try {
    await knex("books")
      .where({ id })
      .update("progress", progress)
      .returning({ id })
  } catch (err) {
    console.error(err.message)
  }
  return { id, progress }
}

module.exports = book
