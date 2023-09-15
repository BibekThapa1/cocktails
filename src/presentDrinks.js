import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrinks.js";

const presentDrinks = async (url)=>{
    let fetchData = await fetchDrinks(url);
   const section =  await displayDrinks(fetchData);

   if(section){
    setDrink(section);
   }
}

export default presentDrinks;