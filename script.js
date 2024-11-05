const container = document.getElementById('character-container');

async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=19');
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

function displayCharacters(characters) {
    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        const characterImage = document.createElement('img');
        characterImage.src = character.image;
        characterImage.alt = character.name;
        characterImage.classList.add('character-image');

        const characterDetails = document.createElement('div');
        characterDetails.classList.add('character-details');

        const characterName = document.createElement('h2');
        characterName.classList.add('character-name');
        characterName.textContent = character.name;

        const characterInfo = document.createElement('p');
        characterInfo.classList.add('character-info');
        characterInfo.innerHTML = `
            <strong>Status:</strong> ${character.status} <br>
            <strong>Espécie:</strong> ${character.species}${character.type ? ` (${character.type})` : ''} <br>
            <strong>Origem:</strong> ${character.origin.name} <br>
            <strong>Localização:</strong> ${character.location.name}
        `;

        characterDetails.appendChild(characterName);
        characterDetails.appendChild(characterInfo);
        characterCard.appendChild(characterImage);
        characterCard.appendChild(characterDetails);
        container.appendChild(characterCard);
    });
}

fetchCharacters();
