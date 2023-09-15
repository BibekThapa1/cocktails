import get from "./getElement.js";
import { hideLoading } from "./toogleLoader.js";


const displayDrinks =  ({ drinks }) => {

  let container = get(".cocktails");
  let title = get(".title");
  if (!drinks) {
    hideLoading();
    container.innerHTML = null;
    title.textContent = "Err.. The drinks are not found";
    return;
  }

  const drink = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;
      return `
    <a href="drink.html?i=${id}">
        <div class="cocktail" data-id="${id}">
        <img src="${img}" alt="${name}">
        <h3 class="title">${name}</h3>
    </div>
    </a>
        `;
    })
    .join(" ");
  hideLoading();
  title.textContent = " ";
  container.innerHTML = drink;
  return container;
};

export default displayDrinks;
