import { showLoading } from "./toogleLoader.js";

 const fetchDrinks = async (url) => {
  showLoading();
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
