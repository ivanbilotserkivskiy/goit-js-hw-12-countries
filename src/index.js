  import fetchCountries from './fetchCountries'
  import countryiesTpl from './templates/handle.hbs'
  import listTpl from './templates/list.hbs'
  import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

  defaultModules.set(PNotifyMobile, {});
  const _ = require('lodash'); 
const inputRef = document.querySelector('.search-input')
const listRef = document.querySelector('.countries-list')

let b = 0;
inputRef.addEventListener('input', _.debounce(onSearch,500))

function onSearch (e) {
    
    e.preventDefault();
    listRef.innerHTML ='';
    
    let searchQuery = inputRef.value
  //  fetchCountries(searchQuery).then(appendCountyMarkup)
  fetchCountries(searchQuery).then(data => {
       b = data.length
       console.log(data)
      return b})
      if(b>10){
        fetchCountries(searchQuery).then(appendListMarkup)
      }
      else if (b>=2 && b<10){
        fetchCountries(searchQuery).then(appendListMarkup)
      }
      else if (b === 1){
        fetchCountries(searchQuery).then(appendCountyMarkup)
      }
    }
   
    
    function appendCountyMarkup(hits) {
      listRef.insertAdjacentHTML('beforeend', countryiesTpl(hits))

  }
  function appendListMarkup(hits) {
    listRef.insertAdjacentHTML('beforeend', listTpl(hits))

}