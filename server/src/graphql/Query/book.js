const knex = require("../../db/knex")
const book = (_, { id }) => knex("books").where({ id }).first()

module.exports = book
