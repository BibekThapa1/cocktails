import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrinks.js";

let singleDrink = async () => {
  // let id = localStorage.getItem("drink");
  // console.log(id)
  const params = new URLSearchParams(window.location.search);
  const id = params.get("i");
  if (!id) {
    window.location.replace("index.html");
  } else {
    let drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drink);
  }
};

singleDrink();
