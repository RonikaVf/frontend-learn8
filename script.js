"use strict";

let productsJSON = `[
{
"name": "Рюкзак",
"id": "backpack",
"price": 25
},
{
"name": "Обувь",
"id": "boot",
"price": 30
},
{
"name": "Палатка",
"id": "tent",
"price": 60
},
{
"name": "Компас",
"id": "compass",
"price": 9
},
{
"name": "Лампа",
"id": "lamp",
"price": 11
},
{
"name": "Чайник",
"id": "kettle",
"price": 15
},
{
"name": "Телескоп",
"id": "telescope",
"price": 50
},
{
"name": "Лодка",
"id": "kayak",
"price": 100
}
]`;

let products = JSON.parse(productsJSON);
let div = document.createElement("div");
main.prepend(div);
div.id = "board";
div.classList.add("board");
updateCartCount();

function addElement() {
  for (let product of products) {
    let prod = document.createElement("div");

    let img = document.createElement("img");
    prod.prepend(img);
    img.src = `./img/${product.id}.svg`;
    img.classList.add("imgprod");

    board.append(prod);
    prod.id = product.id;
    prod.classList.add("product");

    let hprod = document.createElement("h3");
    hprod.textContent = product.name;
    prod.append(hprod);

    let priceProd = document.createElement("p");
    priceProd.textContent = `$${product.price}`;
    prod.append(priceProd);

    let button = document.createElement("button");
    prod.append(button);
    button.classList.add("btnBuy");
    button.textContent = "Купить";

    button.addEventListener("click", function addToCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || {};
      if (cart[product.id]) {
        cart[product.id].amount += 1;
      } else {
        cart[product.id] = { ...product, amount: 1 };
      }
      
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    });
  }
}

addElement();

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  let itemCount = 0;
  for (const key in cart) {
    itemCount += cart[key].amount;
    document.querySelector("#cart").textContent = `Корзина ${itemCount}`;
  }
}
