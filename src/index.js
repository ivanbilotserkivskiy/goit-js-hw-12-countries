import pokemonTpl from './templates/handle.hbs'

import debounce from 'lodash.debounce' 

const contRef = document.querySelector('.container')
const inputRef = document.querySelector('.search-input')

inputRef.addEventListener('input', _.debounce(onSearch, 500))

function onSearch (e) {
    e.preventDefault();

    const input = e.currentTarget;
    const searchQuery = input.elements.query.value;

    fetchCard(searchQuery)
    .then(renderCard)
    .catch(error => console.log(error))
    .finally(() => form.reset())
}

function fetchCard(Id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${Id}`).then(response => {
        return response.json()
    })
}

function renderCard(pokemon) {
    const markup = pokemonTpl(pokemon)
    contRef.innerHTML = markup;
}

// const url = 'https://restcountries.com/v2/name/all'

// fetch(url)
// .then(response => response.json())
// .then(console.log)