import get from "./getElement.js";
import displayDrinks from "./displayDrinks.js";

let baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get("form");
const input = get("[name='drink']");

  form.addEventListener("keyup", (e) => {
    e.preventDefault();
    let value = input.value;
    if (!value) {
      return;
    }
    displayDrinks(`${baseURL}${value}`)
  });


