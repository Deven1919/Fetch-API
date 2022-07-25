const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
   // OLD METHOD FOR FETCHING API
//  const getCountry= function(country){
//     const request= new XMLHttpRequest()
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load',function(){
//     const [data]= JSON.parse(this.responseText)
//     console.log(data)
   


// const html=` <article class="country">
//  <img class="country__img" src="${data.flags.png}" />
//  <div class="country__data">
//    <h3 class="country__name">${data.name.common}</h3>
//    <h4 class="country__region">${data.region}</h4>
//    <p class="country__row"><span>👫</span> ${(+data.population/1000000).toFixed(1)} People</p>
//    <p class="country__row"><span>🗣️</span>${(data.languages.hin)}</p>
//    <p class="country__row"><span>💰</span>${data.currencies.INR.name} ${data.currencies.INR.symbol}</p> 
  
  
//  </div>
// </article>`;
//      countriesContainer.insertAdjacentHTML('beforeend',html)
//      countriesContainer.style.opacity=1;


// }
// )}
//  getCountry('india')


//  Fetching API using fetch method

const renderCountry= function(data){
const html=` <article class="country">
<img class="country__img" src="${data.flags.png}" />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span> ${(+data.population/1000000).toFixed(1)} People</p>
  <p class="country__row"><span>🗣️</span>${(data.languages.hin)}</p>
  <p class="country__row"><span>💰</span>${data.currencies.INR.name} ${data.currencies.INR.symbol}</p> 
 
 
</div>
</article>`;
countriesContainer.insertAdjacentHTML('beforeend',html)
countriesContainer.style.opacity=1;

}

const getCountryFetch= function(country){

    const request= fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response=> response.json())
    .then(data=> renderCountry(data[0]))
 
    
 
   }
getCountryFetch('india')