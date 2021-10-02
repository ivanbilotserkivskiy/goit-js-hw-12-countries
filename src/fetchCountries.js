
    export default function fetchCountries(searchQuery) {
    
    return fetch(`https://restcountries.com/v2/name/${this.searchQuery}`)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      return data
    }).catch(error => console.log(error))
}