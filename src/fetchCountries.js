export default class CountriesApiService {
    constructor() {
        this.searchQuery= '';
    }
    fetchCountries(searchQuery) {
    fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      return data
    }).catch(error => console.log(error))
}

get query () {
    return this.searchQuery;
}
set query(newQuerry) {
    this.searchQuery = newQuerry
}
}