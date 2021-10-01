import debounce from 'lodash.debounce' 
import { result } from 'lodash'

  import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

  defaultModules.set(PNotifyMobile, {});

const inputRef = document.querySelector('.search-input')
const listRef = document.querySelector('.countries-list')


inputRef.addEventListener('input', onSearch)

function onSearch (e) {
    
    e.preventDefault();
    listRef.innerHTML ='';

    const searchQuery = inputRef.value;

  fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      return data
    })
    .then(array => {
           let result = array.slice(0,10).map(elem => {
            if(array.length >= 2 && array.length <= 10) {
              alert({
                text: 'Please refine your search'
              });
            }
            else if(array.length > 10) {
              alert({
                text: 'Need more information about country'
              });
            
            }
            else if (array.length == 1) {
              alert({
                text: 'Your welcome dear'
              });
            }
        if(array.length === 1){
          return `<li>
            <h1>${elem.name}</h1>
            <img src='${elem.flags.png}'>
            <p>Capital:${elem.capital}</p>
            <p>Population:${elem.population}<//p>
          </li>`
        }
        else {
          
        return`
        <li class="list-element">
          <p>${elem.name}</p>
        </li> `
        }
      }).join('')
      
      listRef.insertAdjacentHTML('afterbegin', result)
    })

    .catch(error => console.log(error))
    
    }

