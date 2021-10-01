import countryTpl from './templates/handle.hbs'

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
    .then(data =>{
      console.log(data)
      return data
    })
    .then(appendName(response.name))
    .catch(error => console.log(error))
    }
function appendName (name) {
    // const markup = pokemon.map(pokemonTpl).join('');

    listRef.insertAdjacentHTML('beforeend', countryTpl(name))
  }

