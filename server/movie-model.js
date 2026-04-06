/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
const movies = {
    "tt1": {
      imdbID: "tt1",
      "Title": "Back to the Future", 
      "Released": "1985-07-03", 
      "Runtime": 116, 
      "Genres": ["Adventure", "Comedy", "Sci-Fi"],
      "Directors": ["Robert Zemeckis"], 
      "Writers": ["Robert Zemeckis", "Bob Gale"], 
      "Actors": ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"], 
      "Plot": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.", 
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_SX300.jpg", 
      "Metascore": 88, 
      "imdbRating": 8.5
    },

    "tt2": {
      imdbID: "tt2",
      "Title": "Interstellar",
      "Released": "2014-11-07",
      "Runtime": 169,
      "Genres": ["Adventure", "Drama", "Sci-Fi"],
      "Directors": ["Christopher Nolan"],
      "Writers": ["Jonathan Nolan", "Christopher Nolan"],
      "Actors": ["Matthew McChonaughey", "Anne Hathaway", "Jessica Chastain"],
      "Plot": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 74,
      "imdbRating": 8.7
    },

    "tt3": {
      imdbID: "tt3",
      "Title": "Se7en", 
      "Released": "1995-09-22", 
      "Runtime": 127, 
      "Genres": ["Crime", "Drama", "Mystery"], 
      "Directors": ["David Fincher"], 
      "Writers": ["Andrew Kevin Walker"], 
      "Actors": ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"], 
      "Plot": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.", 
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_SX300.jpg", 
      "Metascore": 65, 
      "imdbRating": 8.6
    }
  }

  module.exports = movies