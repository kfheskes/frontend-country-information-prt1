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
        response.data.sort((a,b)=>{
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

async function fetchDataSearch () {
    try {
        const response = await axios.get('https://restcountries.com/v2/all')
        console.log(response.data);

        countrySearch.innerHTML =
        `
        <li>
            ${response.data[0].flag} ${response.data[0].name} ${reponse.data[0].name} is situated in ${response.data[0].subregion}. It has a population of ${response.data[0].population} people. The capital is ${response.data[0].capital} and you can pay with ${response.data[0].currencies[0].name}'s.
            </li>`
    } catch (e) {
        console.error(e)
    }
}

void fetchDataSearch()


