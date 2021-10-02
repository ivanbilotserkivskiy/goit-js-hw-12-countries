  import fetchCountries from './fetchCountries'
  import countryiesTpl from './templates/handle.hbs'
  import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

  defaultModules.set(PNotifyMobile, {});
  const _ = require('lodash'); 
const inputRef = document.querySelector('.search-input')
const listRef = document.querySelector('.countries-list')


inputRef.addEventListener('input', _.debounce(onSearch,500))

function onSearch (e) {
    
    e.preventDefault();
    // listRef.innerHTML ='';

    let searchQuery = inputRef.value
    console.log(countriesApiService.fetchCountries())
    countriesApiService.fetchCountries(searchQuery).then(appendCountyMarkup)

    // (array => {
    //   if(array.length >= 2 && array.length <= 10) {
    //   alert({
    //     text: 'Please refine your search'
    //   });
    // }
    // else if(array.length > 10) {
    //   alert({
    //     text: 'Need more information about country'
    //   });
    
    // }
    // else if (array.length === 1) {
    //   alert({
    //     text: 'Your welcome dear'
    //   });
    // }
    //        let result = array.map(elem => {
            
    //     if(array.length === 1){
    //       return `
    //         <h1>${elem.name}</h1>
    //         <img src='${elem.flags.png}'>
    //         <p>Capital:${elem.capital}</p>
    //         <p>Population:${elem.population}<//p>
    //        `
    //     }
    //     else {
          
    //     return`
    //     <li class="list-element">
    //       <p>${elem.name}</p>
    //     </li> `
    //     }
    //   }).join('')
      
      // listRef.insertAdjacentHTML('afterbegin', result)
    }

    
    function appendCountyMarkup(hits) {
      listRef.insertAdjacentHTML('beforeend', countryiesTpl(hits))

  }
