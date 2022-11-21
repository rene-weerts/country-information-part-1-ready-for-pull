//- Hiermee koppelen we ons app.js bestand aan package.json en axios
import axios from "axios" ;

console.log("Hallo daar");
//- Asynchrone functie schrijven
//- Try catch blok maken om errors af te vangen
//- In het try blok gaan we de response afvangen van axios

//- Asynchrone functie om de response van de back-end binnen te krijgen
async function fetchCountryInformation() {

//- Destructuren en  2 variabele maken van de link https://restcountries.com/-v2-all
//- Const BASE_URI =
//- Const ENDPOINT =
    const BASE_URI = "https://restcountries.com/"
    const ENDPOINT = "v2/all"
//- Het tryblok begint met try{}
    try {
//- Omdat we gebruik maken van een asynchrone functie moeten we een await maken
//         await
//- Vervolgens de request met axios.get
//         await axios.get()
//- Vervolgens de link plakken tussen haakjes met aanhalingstekens "https://restcountries.com/v2-all"
//- Let op!! deze link niet https://restcountries.com/#api-endpoints-v2-all is adres van web-pagina van api
//- Let op!! deze link wel  https://restcountries.com/-v2-all is adres van api op de pagina
//         await axios.get("https://restcountries.com/v2-all")
//- Vervolgens een variabele maken const en deze een naam geven
//         const response =
//         const response = await axios.get("https://restcountries.com/v2-all")
        const response = await axios.get(BASE_URI + ENDPOINT)
//- Om te checken of dit werkt console.log maken en de array aanspreken met .data
//         console.log(response)

//- Om onze data te sorteren op population van hoog naar laag gebruiken we de .sort methode
//- .sort((a, b)=>{
//-  return a - b
//- })
//- (a, b) staat voor response.data
//- Return a - b staat voor response.data.population
        response.data.sort((a, b) => {
            return a.population - b.population
        })
//- Om te checken of dit werkt een console.log maken
//         console.log(response.data)

//- We maken variabele met een naam om onze data te injecteren
//- We maken op onze html pagina een ul en geven hem een id
//- We roepen deze aan met document.getElementById en tussen haakjes vullen we de id naam in die we gegeven hebben
        const countryList = document.getElementById("countries")
//- Om onze ul met id countryList van inhoud te voorzien gebruiken we .innerHTML
//- Om alle met onze .sort opgehaalde data zichtbaar te maken gebruiken we de .map methode
//- Tussen de haakjes geven we deze een naam het is conventie om deze in enkelvoud te geven
//- We gaan een template string maken dus moeten we onze list voorzien van back-tic's anders werkt hij niet!!!!!!
//- In onze template string maken we de bijbehorende html elements h3/P/span met img tag
//- Met template literals injecteren we de code
//- We koppelen ons css bestand aan countries-
//- We kunnen met += er steeds een land aan toevoegen (met alleen = laat hij steeds een nieuwe zien)
        response.data.map((country) => {
            countryList.innerHTML +=
                `<li>
                                    <h3 class="countries-${country.region}">${country.name}</h3>
                                    <p>Population of ${country.population} </p>
                                    <span ><img class="image" src="${country.flags.svg}" alt="${country.name}"/></span>
                                    </li>
            `
        })
//- Try catch om errors af te vangen
//- Catch verwacht een argument we geven als argument error
//- Niet console.log maar console.error gebruiken
    } catch (error) {
        console.error(error)
    }
}
//- Functie aanroepen zodat we kunnen zien wat we doen
fetchCountryInformation()
