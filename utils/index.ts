export async function fetchCars(){
    const headers = {
            'X-RapidAPI-Key': 'c851e3f955mshece3a8314f3441ep14ed67jsnb16ae455f770',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', { headers: headers, });

const result = await response.json()
}