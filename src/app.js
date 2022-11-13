import axios from "axios" ;
console.log("Hallo daar");

//asynchrone functie schrijven
//try catch blok maken om errors af te vangen
//in het try blok gaan we de response afvangen van axios

async function fetchCountryInformation() {
    const BASE_URI = "https://restcountries.com/"
    const ENDPOINT = "v2/all"


    try {
        const response = await axios.get(BASE_URI + ENDPOINT)

        response.data.sort((a,b)=>{
            return a.population -b.population
        })
        const countryList = document.getElementById("countries")

        response.data.map((country)=>{
            countryList.innerHTML +=


                `<li>
                                    <h3 class="countries-${country.region}">${country.name}</h3>
                                    <p>Population of ${country.population} </p>
                                    <span ><img class="image" src="${country.flags.svg}" alt="${country.name}"/></span>
                                    </li>
            `
        })

    } catch(error){
        console.error(error)
    }
}
fetchCountryInformation()