function CreateCard(movie)
{
    let movieCard = document.createElement("div");
    movieCard.className = "movie-card";

    let movieImageDiv = document.createElement("div");
    movieImageDiv.className = "movie-image";
    let movieImg = document.createElement("img");
    movieImg.src = movie.primaryImage;
    movieImg.alt = `${movie.primaryTitle} Poster`;
    movieImageDiv.append(movieImg);

    let movieDetails = document.createElement("div");
    movieDetails.className = "movie-details";

    let movieTitle = document.createElement("h2");
    movieTitle.className = "movie-title";
    movieTitle.textContent = movie.primaryTitle || "Untitled";

    let movieMeta = document.createElement("div");
    movieMeta.className = "movie-meta";
    movieMeta.innerHTML = `
        <span>${movie.year || "N/A"}</span> | 
        <span>${movie.runtimeMinutes || "N/A"} min</span> | 
        <span>${movie.averageRating?movie.averageRating+"/10 ⭐": "No Rating"}</span>
    `;

    let movieDesc = document.createElement("p");
    movieDesc.className = "movie-description";
    movieDesc.textContent = movie.description || "No description available";

    let movieTags = document.createElement("div");
    movieTags.className = "movie-tags";
    (movie.genres.split(',') || []).forEach(tag => {
        let span = document.createElement("span");
        span.textContent = (tag !== "") ? tag:"No Genres";
        movieTags.append(span);
    });

    let movieStats = document.createElement("div");
    movieStats.className = "movie-stats";
    movieStats.innerHTML = `
        <div>
            <strong>Budget:</strong><br>$${movie.budget ? movie.budget.toLocaleString() : "N/A"}
        </div>
        <div>
            <strong>Box Office:</strong><br>$${movie.grossWorldwide ? movie.grossWorldwide.toLocaleString() : "0"}
        </div>
    `;

    let votes = movie.numVotes;
    let votesDisplay = "0";
    if (votes) {
        if (votes >= 1_000_000) {
            votesDisplay = (votes / 1_000_000).toFixed(1) + "M"; 
        }
            else if (votes >= 1_000) {
            votesDisplay = (votes / 1_000).toFixed(1) + "K";
        } else if (votes >= 1) {
            votesDisplay = votes.toString();
        }
    }
    movieStats.innerHTML += `<div><strong>Votes:</strong><br>${votesDisplay}</div>`;

    if(!(movie.url === "")) {
        let urlLink = document.createElement('a')
        urlLink.href = movie.url;
        urlLink.classList.add('link')
        urlLink.innerHTML = "🔗";
        movieCard.append(urlLink)
    }

    movieDetails.append(movieTitle, movieMeta, movieDesc, movieTags, movieStats);
    movieCard.append(movieImageDiv, movieDetails);

    return movieCard;
}