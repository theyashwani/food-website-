let cart = [];

function addToCart(name, price) {

  cart.push({
    name: name,
    price: price
  });

  updateCart();

  alert(name + " added to cart! 🍔");
}


function updateCart() {

  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartCount.innerText = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.innerText = "0";
    return;
  }

  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {

    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <strong>₹${item.price}</strong>
      </div>
    `;

  });

  cartTotal.innerText = total;
}


function openCart() {
  document.getElementById("cartModal").style.display = "flex";
}


function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}


function placeOrder() {

  if (cart.length === 0) {
    alert("Please add some food first! 😋");
    return;
  }

  alert(
    "🎉 Thank you for your order!\n\n" +
    "Your delicious food is being prepared.\n" +
    "🚀 Fast delivery is on the way!"
  );

  cart = [];

  updateCart();

  closeCart();
}


/* CATEGORY FILTER */

function filterFood(category) {

  const foods = document.querySelectorAll(".food-card");

  foods.forEach(food => {

    if (
      category === "all" ||
      food.dataset.category === category
    ) {
      food.style.display = "block";
    } else {
      food.style.display = "none";
    }

  });

}


/* SEARCH */

function searchFood() {

  const search =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase();

  const foods =
    document.querySelectorAll(".food-card");

  foods.forEach(food => {

    const name =
      food.dataset.name.toLowerCase();

    if (name.includes(search)) {
      food.style.display = "block";
    } else {
      food.style.display = "none";
    }

  });

}
