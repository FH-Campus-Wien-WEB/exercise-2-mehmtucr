window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
            const container = document.createElement("article")
            container.classList.add("movie")

            container.id = movie.imdbID

            const title = document.createElement("h1")
            title.textContent = movie.Title
            container.append(title)

            const editButton = document.createElement("button")
            editButton.textContent = "Edit"

            editButton.onclick = function() {
              location.href = "edit.html?imdbID=" + movie.imdbID
            }
            container.append(editButton)

            
            container.append(document.createElement("br"));
            container.append(document.createElement("br"));


            movie.Genres.forEach(function(genre) {
              const span = document.createElement("span")
              span.textContent = genre
              span.classList.add("genre")
              container.append(span)
            })

            const plot = document.createElement("p")
            plot.textContent = movie.Plot
            container.append(plot)

            const img = document.createElement("img")
            img.src = movie.Poster
            container.append(img)

            const released = document.createElement("p")
            released.textContent = "Released on " + movie.Released
            container.append(released)

            const runtime = document.createElement("p")
            runtime.textContent = "Runtime: " + movie.Runtime + " min"
            container.append(runtime)

            const metascore = document.createElement("p")
            metascore.textContent = "Metascore: " + movie.Metascore
            container.append(metascore)

            const imdb = document.createElement("p")
            imdb.textContent = "IMDB: " + movie.imdbRating
            container.append(imdb)
                        
            const directorTitle = document.createElement("h2")
            directorTitle.textContent = "Director"
            container.append(directorTitle)

            const directors = document.createElement("p")
            directors.textContent = movie.Directors
            container.append(directors)

            const writerTitle = document.createElement("h2")
            writerTitle.textContent = "Writers"
            container.append(writerTitle)

            const writers = document.createElement("p")
            writers.textContent = movie.Writers.join(", ")
            container.append(writers)

            const cast = document.createElement("h2")
            cast.textContent = "Cast"
            container.append(cast)

            const ul = document.createElement("ul")
            movie.Actors.forEach(function(actor) {
              const li = document.createElement("li")
              li.textContent = actor
              ul.append(li)
            })
            // Füge Liste hinzu
            container.append(ul)
                        
            // Füge Film hinzu
            bodyElement.append(container)
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
