const knex = require("../../db/knex")
const books = (_, { input }) =>
  knex("books")
    .where(input || {})
    .orderBy("updated_at", "desc")
module.exports = books
