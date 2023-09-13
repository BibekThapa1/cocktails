import get from "./getElement.js";

let loaderBtn = get(".loader");

export const showLoading = () =>{
    loaderBtn.classList.add("show-loader");
}

export const hideLoading = ()=>{
    loaderBtn.classList.remove("show-loader");
}