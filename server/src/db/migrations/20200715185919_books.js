exports.up = (knex) => {
  return knex.schema.createTable("books", function (table) {
    table.increments("book_id")
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now())
    table.string("title").notNullable()
    table.string("author")
    table.string("genre")
    table.integer("pages").notNullable()
    table.date("started_at").defaultTo(knex.fn.now())
    table.date("planned_end").defaultTo(knex.fn.now())
    table.date("actual_end").defaultTo(knex.fn.now())
    table.boolean("active").notNullable().defaultTo(true)
    table.integer("progress")
    table.string("notes", 1200)
    table.integer("review").defaultTo(0)
    table.string("color_cover").defaultTo("#FFD700")
  })
}

exports.down = (knex) => knex.schema.dropTable("books")
