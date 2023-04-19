import axios from "axios";

async function fechtCountries (){
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all?')
        console.log(response.data)
    }
    catch (e){
        console.error(e)
    }
}

void fechtCountries();



console.log('Hallo daar!');