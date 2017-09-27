var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   cart.push({[item] : Math.floor(Math.random()*100)});
   console.log(item + ' has been added to your cart.');
   return cart;
}

function viewCart() {
   if (cart.length === 0) {
       console.log('Your shopping cart is empty.');
   }
   if (cart.length === 1) {
       console.log('In your cart, you have ' + Object.keys(cart[0]) + ' at $' + cart[0][Object.keys(cart[0])] + '.');
   }
   if (cart.length === 2) {
       console.log('In your cart, you have ' + Object.keys(cart[0]) + ' at $' + cart[0][Object.keys(cart[0])] + ' and ' + Object.keys(cart[1]) + ' at $' + cart[1][Object.keys(cart[1])] + '.');
   }
   if (cart.length > 2) {
       var contents = [];
       for (var i = 1; i < (cart.length-1); i++ ) {
        contents.push(' ' + Object.keys(cart[i]) + ' at $' + cart[i][Object.keys(cart[i])]);
       }
       console.log('In your cart, you have ' + Object.keys(cart[0]) + ' at $' + cart[0][Object.keys(cart[0])] + ', ' + contents + ' and ' + 	Object.keys(cart[cart.length-1]) + ' at $' + cart[cart.length-1][Object.keys(cart[cart.length-1])] + '.');
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
