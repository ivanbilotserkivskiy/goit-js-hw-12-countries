import pokemonTpl from './templates/handle.hbs'

import debounce from 'lodash.debounce' 

const contRef = document.querySelector('.container')
const inputRef = document.querySelector('.search-input')
const listRef = document.querySelector('.countries-list')

inputRef.addEventListener('input', onSearch)

function onSearch (e) {
    e.preventDefault();

    const searchQuery = inputRef.value;

    fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => response.json())
    // .then(console.log)   
    .then(data =>{
      console.log(data)
    })
    .then(menuMarkup(searchQuery))
    .catch(error => console.log(error))
  
    // listRef.insertAdjacentHTML('afterbegin', menuMarkup(pokemonTpl));
    // const input = e.currentTarget;
    // const searchQuery = input.elements.query.value;

    // fetchCard(searchQuery)
    // .then(renderCard)
    // .catch(error => console.log(error))
    // .finally(() => form.reset())
}
function menuMarkup (pokemon) {
    const markup = pokemon.map(pokemonTpl).join('');
    // const markup = pokemonTpl(pokemon)
    // listRef.insertAdjacentHTML('afterbegin', markup);
    listRef.innerHTML = markup;
  }

// function fetchCard(Id) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${Id}`).then(response => {
//         return response.json()
//     })
// }

// function renderCard(pokemon) {
//     const markup = pokemonTpl(pokemon)
//     listRef.innerHTML = markup;
// }

// const url = 'https://restcountries.com/v2/name/all'

// fetch(url)
// .then(response => response.json())
// .then(console.log)