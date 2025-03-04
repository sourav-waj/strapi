

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'; 
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'; 
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    if (this.classList.contains('fa-lightbulb')) {
        this.classList.remove('fa-lightbulb');
        this.classList.add('fa-moon');
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.borderColor = 'white';
    } else {
        this.classList.remove('fa-moon');
        this.classList.add('fa-lightbulb');
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.borderColor = 'black';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const pokemonContainer = document.getElementById('Pokemons'); 

    fetch('http://localhost:1337/api/Pokemons', {
        method: 'GET', 
        headers: {
            'Authorization': 'Bearer 5ae66486f3af5796926e7cbd0757eb2699bb92ff23a35661215103d5098b7bba5dc8bb8dc154e80785f2fa6d522fc615c4c3277987095e6cf98c71220f7fdb68ad77ca4cd74fab9840eb3ad31c72adf57548eda52251a296f700fa2fe76d486b34a1a84974d6ee9c791a8a86a5641f553fc55a51e47b0486d0f01ec3a4cb3f55', 
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json()) 
        .then(data => {
           
            if (data.data && Array.isArray(data.data)) {
                data.data.forEach(pokemon => {
                    let div = document.createElement('div');
                    div.innerHTML = `
                        <h2>${pokemon.Name}</h2> 
                        <p>${pokemon.Type}</p> 
                        <img src="${pokemon.image}" alt="${pokemon.Name} image" />
                    `;
                    pokemonContainer.appendChild(div);
                });
            }
        })
        .catch(error => console.error('Error fetching Pokemons:', error));
});

