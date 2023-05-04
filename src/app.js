import axios from "axios";


// GET request https://restcountries.com/v3.1/all

// 1. installer de dependency axios (npm install axios)
// 2. schrijf een asychrone functie
// 3. maak een GET request met axios (met await)
// 4. Try/Catch block om de errors af te vangen
// 5. axios.get met juist url
// 6. kijken naar waar staan de gegevens data daarna ophalen met console log.
// 7. endpoint bepalen. door middel van een filter response met name,flags,population en continent https://restcountries.com/v3.1/all?fields=name,flags,population,continents
// 8. structuur aanbrengen in index met header, main en footer
// 9. afbeelding in header zetten van world_map
// 10. de juiste font zoeken voor de tekst
//11. zorg dat het resultaat naam(land), vlag en de zin(population) Has a population of [amount] people
// 12. aparte functie maken voor de continent namen.
//12. het resultaat in een li plaatsen in drie kolommen naast elkaar.
//13. populatie sorteren met de sort
//14. aparte functie maken voor de kleur tekst er zijn uitzonderingen dus een else

const countryList = document.getElementById('countryList')


async function fetchCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,continents')
        response.data.sort((a, b) => {
            return a.population - b.population
        })

        console.log(response.data)

        countryList.innerHTML = response.data.map((country) => {
            return `
        <li> 
        <div class="countryList">
        <img class="image" src="${country.flags.png}" alt="Vlag van"/> 
        <span class="${getContinentColor(country.continents[0])}"> ${country.name.common} </span> 
        <p> a population of ${country.population}</p>
        </li> 
        </div>
        `
        })
    } catch (e) {
        console.error(e)
    }
}

void fetchCountries();

function getContinentColor(continentColor) {
    switch (continentColor) {
        case 'Africa':
            return 'colorAfrica';
        case 'North America':
            return 'colorNorthAmerica';
        case 'South America':
            return 'colorSouthAmerica';
        case 'Asia':
            return 'colorAsia';
        case 'Europe':
            return 'colorEurope';
        case 'Oceania':
            return 'colorOceania';
    }
}

// prt2
const countrySearch = document.getElementById('searchCountry');

const searchButton = document.getElementById('form-search');

searchButton.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    // zorgt ervoor dat de pagina niet ververst
    e.preventDefault();
    const queryField = document.getElementById('input-search');
    fetchDataSearch(queryField);
    queryField.value = '';
    // maakt invuld veld weer leeg.
}


async function fetchDataSearch(countryQuery) {

    try {
        const result = await axios.get('https://restcountries.com/v2/all')
        const country = result.data[0];
        console.log(result.data);

        countrySearch.innerHTML =
            `
        <li class="countryList">
          <span class="countryName"> <img class="flags" src="${country.flag}" alt="Vlag van"/>  ${country.name}</span>
         <p> ${country.name} is situated in ${country.subregion}. It has a population of ${country.population} people. The capital is ${country.capital} ${createCurrency(country.currencies)}.</p>
            </li class="countryList">`;

    } catch (e) {
        console.error(e)
    }
}

void fetchDataSearch()

function createCurrency(currencies) {
    let output = 'and you can pay with ';

    if (currencies.length === 2) {
        return output + `${currencies[0].name} and ${currencies[1].name}'s `;
    } else {
        return output + `${currencies[0].name}'s`;
    }
}


// zoek functie psuedo
// titel en afbeelding zoeken.
// submitform aanmaken in HTML met zoek functie
// een id mee geven aan het form zodra er op enter wordt gedrukt inhoud zichtbaar wordt
// const element by id aanmaken