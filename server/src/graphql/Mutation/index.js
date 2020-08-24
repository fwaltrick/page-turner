const addBook = require("./addBook")
const updateProgress = require("./updateProgress")
const deleteBook = require("./deleteBook")
const editBook = require("./editBook")

const Mutation = {
  addBook,
  updateProgress,
  deleteBook,
  editBook,
}

module.exports = { Mutation }
