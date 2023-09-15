import get from "./getElement.js";
import { hideLoading } from "./toogleLoader.js";

function displaySingleDrink({ drinks }) {
  let drink = drinks[0];
  let singleDrinkImg = get(".img-section img");
  let title = get(".img-details h2");
  let description = get(".img-details p");
  let checkBox = get(".checkbox");

  // Destructuring
  let { strDrink: name, strDrinkThumb: img, strInstructions: desc } = drink;
  let ingredient = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];

  hideLoading();
  // Giving the value
  singleDrinkImg.src = img;
  title.textContent = name;
  description.textContent = desc;
  console.log(ingredient);
  const ingredients = ingredient
    .map((i) => {
      if (!i) return;
      return `
        <p><i class="ri-checkbox-line"></i>${i}</p>
        `;
    })
    .join(" ");
  console.log(ingredients);
  checkBox.innerHTML = ingredients;
}

export default displaySingleDrink;
