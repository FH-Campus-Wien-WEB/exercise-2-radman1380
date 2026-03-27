window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      movies.forEach(function(movie){
                        const article=document.createElement("article");
                        article.id=movie.imdbID
                        const title=document.createElement("h1");
                      const btn=document.createElement("button")
                      btn.textContent='Edit'
                      btn.className='btns'
                        const space=document.createElement("br");
                        title.textContent="Title: "+movie.Title;
                        btn.onclick=function(){
                          window.location.href="./edit.html?imdbID="+movie.imdbID
                        }
                        const poster=document.createElement("img");
                        poster.src=movie.Poster;
                        poster.alt=movie.Title+" Poster";
                       
                        const released=document.createElement("p");
                        released.textContent="Released: "+movie.Released;
                        const runtime=document.createElement("p");
                        runtime.textContent="Runtime: "+movie.Runtime+" min";
                        const genresContainer=document.createElement("p");
                        genresContainer.textContent='Genres: ';
                        movie.Genres.forEach(function(genre){
                            const genreTag=document.createElement("span");
                            genreTag.className="genre";
                            genreTag.textContent=genre;
                            genresContainer.append(genreTag);
                        })
                        const dir=document.createElement("h2");
                        dir.textContent='Directors: ';
                        const writers=document.createElement("h2");
                        const directorList=document.createElement("ul");
                        movie.Directors.forEach(function(director){
                            const li=document.createElement("li");
                            li.textContent=director;
                            directorList.append(li);
                        });
                        writers.textContent="Writers: ";
                        const writerList=document.createElement("ul");
                        movie.Writers.forEach(function (writer){
                            const l=document.createElement("li");
                            l.textContent=writer;
                            writerList.append(l);
                        });
                        const actor_title=document.createElement("h2");
                        actor_title.textContent="Actors: ";
                        //
                        const actorList=document.createElement("ul");
                        movie.Actors.forEach(function(actor){
                            const l=document.createElement("li");
                            l.textContent=actor;
                            actorList.append(l);
                        });
                        const plot=document.createElement("p");
                        plot.textContent="Plot: "+movie.Plot;
                        const imdbRating=document.createElement("p");
                        const metaScore=document.createElement("p");
                        metaScore.textContent="Metascore: "+movie.Metascore;
                        imdbRating.textContent="IMDB Rating: "+movie.imdbRating;
                        
                        article.append(poster);
                        
                        article.append(title);
                        article.append(btn)
                        article.append(runtime);
                        article.append(released);
                        article.append(genresContainer);
                        article.append(plot);
                        article.append(dir);
                        article.append(directorList);
                        
                        article.append(writers);
                        article.append(writerList);
                        article.append(actor_title);
                        article.append(actorList);
                        article.append(metaScore);
                        article.append(imdbRating);
                        bodyElement.append(article);
                        bodyElement.append(space);
                    })

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

