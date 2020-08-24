exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("books")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("books").insert([
        {
          title: "Candide",
          author: "Voltaire",
          genre: "Literature",
          pages: 136,
          started_at: "03.12.20",
          planned_end: "04.15.20",
          actualEnd: "07.20.20",
          active: true,
          progress: 35,
          notes:
            "Fools have a habit of believing that everything written by a famous author is admirable. For my part I read only to please myself and like only what suits my taste",
          review: 4,
        },
        {
          title: "The Seagull",
          author: "Anton Chekhov",
          genre: "Theater",
          pages: 192,
          started_at: "04-12-20",
          planned_end: "05.30.20",
          actualEnd: "07.20.20",
          active: true,
          progress: 120,
          notes: "If my life can ever be of any use to you, come and take it",
          review: 5,
        },
        {
          title: "Capital: Volume 1",
          author: "Karl Marx",
          genre: "Political Economy",
          pages: 850,
          started_at: "07.12.20",
          planned_end: "08.24.20",
          actualEnd: "07.20.20",
          active: true,
          progress: 83,
          notes: "Accumulate, accumulate! This is Moses and the Prophets!",
          review: 0,
        },
        {
          title: "Eloquent Javascript",
          author: "Marijn Haverbeke",
          genre: "Coding",
          pages: 472,
          started_at: "05.14.20",
          planned_end: "07.20.20",
          actualEnd: "07.20.20",
          active: true,
          progress: 83,
          notes: "",
          review: 0,
        },
      ])
    })
}
