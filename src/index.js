  import fetchCountries from './fetchCountries'
  import countryiesTpl from './templates/handle.hbs'
  import listTpl from './templates/list.hbs'
  import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

  defaultModules.set(PNotifyMobile, {});
  const _ = require('lodash'); 
const inputRef = document.querySelector('.search-input')
const listRef = document.querySelector('.countries-list')

let array = 0;
inputRef.addEventListener('input', _.debounce(onSearch,500))

function onSearch (e) {
    
    e.preventDefault();
    listRef.innerHTML ='';
    
    let searchQuery = inputRef.value

  fetchCountries(searchQuery).then(data => {
       array = data.length
       if(array > 10){
        alert({
          text: 'need to clarify request'
        });
        fetchCountries(searchQuery).then(appendListMarkup)

      }
      else if (array >=2 && array < 10){
        fetchCountries(searchQuery).then(appendListMarkup)
        
      }
      else if (array === 1){
        alert({
          text: 'your welcome dear!'
        });
      
        fetchCountries(searchQuery).then(appendCountyMarkup)
      }
      return array})
      
    }
   
    
    function appendCountyMarkup(hits) {
      listRef.insertAdjacentHTML('beforeend', countryiesTpl(hits))

  }
  function appendListMarkup(hits) {
    listRef.insertAdjacentHTML('beforeend', listTpl(hits))

}