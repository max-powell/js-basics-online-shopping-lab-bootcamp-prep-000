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
    let array = [`In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}`]
    if (cart.length === 1) {
      array.push('.')
      return array.join('')
    } else{
      for (let i = 1; i < cart.length-1; i++) {
        array.push(`${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
      }
      array.push(`and ${cart[cart.length-1]['itemName']} at $${cart[cart.length-1]['itemPrice']}.`)
      return array.join(', ')
    }
  }
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
