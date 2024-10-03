"use strict";

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  let itemCount = 0;
  for (const key in cart) {
    itemCount += cart[key].amount;
    document.querySelector("#cart").textContent = `Корзина ${itemCount}`;
  }
};

updateCartCount();

const cart = JSON.parse(localStorage.getItem("cart"));

let cartProd = document.querySelector(".products");

for (let prod in cart) {
  let product = cart[prod];

  let divElement = document.createElement("div");
  cartProd.prepend(divElement);
  divElement.classList.add("cart")

  let img = document.createElement("img");
  divElement.prepend(img);
  img.src = `./img/${product.id}.svg`;
  img.classList.add("imgCart");

  let prodName = document.createElement("p");
  divElement.append(prodName);
  prodName.textContent = product.name;

  let prodPrice = document.createElement("p");
  divElement.append(prodPrice);
  prodPrice.textContent = `$${product.price}`;

  let prodAmount = document.createElement("p");
  divElement.append(prodAmount);
  prodAmount.textContent = product.amount;

  let prodTotal = document.createElement("p");
  divElement.append(prodTotal);
  prodTotal.textContent = `$${product.price * product.amount}`

  let deleteBtn = document.createElement("button");
  divElement.prepend(deleteBtn);
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "X";

  // divElement.addEventListener("click", (event) => {
  //   if (event.target.classList.contains("delete")) {
  //     delete cart[product.id];
  //     deleteProduct(product);
  //   })

  // function deleteProduct(product) {
  //   const deleting = document.querySelector(`.cart.${product.id}`);
  //   deleting.remove();
  // }

  divElement.addEventListener("mousedown", (event) => {
    if (event.detail > 1) {
      event.preventDefault();
    }
  })
}
