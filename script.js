document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://rickandmortyapi.com/api/character/?page=19";
    const characterContainer = document.getElementById("character-container");

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(character => {
                const characterCard = document.createElement("div");
                characterCard.classList.add("character-card");

                characterCard.innerHTML = `
                    <img src="${character.image}" alt="${character.name}" class="character-image">
                    <div class="character-info">
                        <h2 class="character-name">${character.name}</h2>
                        <p class="character-status">Status: ${character.status}</p>
                        <p class="character-details">Espécie: ${character.species}${character.type ? `, Tipo: ${character.type}` : ''}</p>
                        <p class="character-details">Origem: ${character.origin.name}</p>
                        <p class="character-details">Localização: ${character.location.name}</p>
                    </div>
                `;

                characterContainer.appendChild(characterCard);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar personagens:", error);
            characterContainer.innerHTML = "<p>Erro ao carregar personagens.</p>";
        });
});
