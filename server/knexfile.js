const path = require("path")
const { knexSnakeCaseMappers } = require("objection")

module.exports = {
  client: "pg",
  connection: {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.DBUSER,
    password: process.env.PGPASSWORD,
  },
  debug: true,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.join(__dirname, "src", "db", "migrations"),
  },
  seeds: {
    directory: path.join(__dirname, "src", "db", "seeds"),
  },

  ...knexSnakeCaseMappers(),
}
