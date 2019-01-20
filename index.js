var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return 'Your shoping cart is empty.'
  } else {
    let array = [`In your cart, you have ${cart[0][itemName]} at $${cart[0][itemPrice]}`]
    for (let i = 1; i < cart.length; i++) {
      array.push(`and ${cart[i][itemName]} at $${cart[i][itemPrice]}`)
    }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
