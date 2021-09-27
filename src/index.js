import pokemonTpl from './templates/handle.hbs'
const containerRef = document.querySelector('.container')
fetch('https://pokeapi.co/api/v2/pokemon/3/').then(response => {
    console.log(response.json)
    return response.json()
}).then(pokemon => {
    console.log(pokemon)
    const markup = pokemonTpl(pokemon)
    console.log(markup)
    containerRef.insertAdjacentHTML('afterbegin', markup)
}).catch(error => {
    console.log(error)
})