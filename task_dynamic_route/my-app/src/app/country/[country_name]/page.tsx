
export default function Page({params} : {params: {country_name : string}}) {
   const countriesArray = [
    {name: "Pakistan", population: "251.2 Million", capital: "Islamabad"},
    {name: "Afghanistan", population: "42.6 Million", capital: "Kabul"},
    {name: "India", population: "1.45 Billion", capital: "Delhi"},
    {name: "China", population: "1.41 Billion", capital: "Beijing"},
    {name: "Bangladesh", population: "173.5 Million", capital: "Dhaka"},
]
const matchedCountry = countriesArray.find(
    (country) => country.name.toLowerCase() === params.country_name.toLowerCase()
  );
    return(
        <>
        {matchedCountry?(
            <>
            <h1>Selected Country is : {matchedCountry?.name}</h1><br />
            <h2>with a populations of : {matchedCountry?.population}</h2><br />
            <h2>and capital city named : {matchedCountry?.capital}</h2>
            </>
    ) :(
        <>

            <h1>OOPS !!! {params.country_name} not found in the list </h1>
            <h1> please select b/w pakistan, afghanistan, india, china & bangladesh </h1>
        

        </>
            )}
        </>
    )
}