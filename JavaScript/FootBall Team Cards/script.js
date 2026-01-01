const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false }
  ]
};

const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const coachEl = document.getElementById("head-coach");
const playerCardsEl = document.getElementById("player-cards");
const playersSelect = document.getElementById("players");

teamEl.textContent = footballTeam.team;
yearEl.textContent = footballTeam.year;
coachEl.textContent = footballTeam.headCoach;

function displayPlayers(players) {
  playerCardsEl.innerHTML = players
    .map(player => {
      const captainLabel = player.isCaptain ? "(Captain) " : "";
      return `
        <div class="player-card">
          <h2>${captainLabel}${player.name}</h2>
          <p>Position: ${player.position}</p>
        </div>
      `;
    })
    .join("");
}

displayPlayers(footballTeam.players);

playersSelect.addEventListener("change", () => {
  const selectedPosition = playersSelect.value;

  if (selectedPosition === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      player => player.position === selectedPosition
    );
    displayPlayers(filteredPlayers);
  }
});
