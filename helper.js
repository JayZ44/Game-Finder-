//page should be filled with a few games upon loading
const apiData = fetch("https://www.freetogame.com/api/games")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Fetch Error:", error);
  });

//populate front page with 5 games upon loading
apiData.then((gameData) => {
  for (let i = 0; i < 21; i++) {
    const gamesArr = document.querySelector(".games");
    gamesArr.innerHTML += `<li>
      <a href="${gameData[i].game_url}" target="_blank">
    <img src="${gameData[i].thumbnail}" alt="${gameData[i].title}"/>
    <p class="cardTitle">Title : ${gameData[i].title}</p>
    <p>Genre : ${gameData[i].genre}</p>
    <p>Platform : ${gameData[i].platform}</p>
    <p>Publisher : ${gameData[i].publisher}</p>
    <p>Developer : ${gameData[i].developer}</p>
    <p>Release Date : ${gameData[i].release_date}</p>
    <p>Description : ${gameData[i].short_description}</p>
    </a>;
</li>`;
  }

  //user should be able to interact with api (buttons and/or forms)
  //search for specific game (not case sensitive)
  //search for random game

  const min = 0;
  const max = gameData.length - 1;
  const randomButton = document.querySelector("#randomButton");
  randomButton.addEventListener("click", () => {
    const gameIndex = Math.round(Math.random() * (max - min + 1) + min);
    const gamesArr = document.querySelector(".games");
    gamesArr.innerHTML += `<li>
      <a href="${gameData[gameIndex].game_url}" target="_blank">
    <img src="${gameData[gameIndex].thumbnail}" alt="${gameData[gameIndex].title}"/>
    <p class="cardTitle">Title : ${gameData[gameIndex].title}</p>
    <p>Genre : ${gameData[gameIndex].genre}</p>
    <p>Platform : ${gameData[gameIndex].platform}</p>
    <p>Publisher : ${gameData[gameIndex].publisher}</p>
    <p>Developer : ${gameData[gameIndex].developer}</p>
    <p>Release Date : ${gameData[gameIndex].release_date}</p>
    <p>Description : ${gameData[gameIndex].short_description}</p>
    </a>;
</li>`;
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });
});

const topButton = document.querySelector("#backToTop");
topButton.addEventListener("click", () => {
  document.body.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
//pick a random number between 0 and the array length - 1
//gamesArr.innerHTML shape from earlier. replace i with gameIndex.
//search for game by developer
//search for game by genre
//search for game by release date
//search for game by platform
//search for game by multiple factors at once (filtering)
//make game cards and buttons get bigger and glow when hovered over
