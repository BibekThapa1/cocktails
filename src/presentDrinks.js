import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

const presentDrinks = async (url)=>{
    let fetchData = await fetchDrinks(url);
   const section =  await displayDrinks(fetchData);
   console.log(fetchData)
   if(section){
    setDrink(section);
   }
}

export default presentDrinks;