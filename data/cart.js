export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart) {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '1'
    }];
  }
}

function saveToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity) {
    const itemInCart = cart.find(item => item.productId === productId);

    if (itemInCart) {
      itemInCart.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity: 1,
        deliveryOptionId: '1'
      });
    }

  saveToLocalStorage();
}

export function deleteProductToCart(productId) {
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cart.splice(cart.indexOf(cartItem), 1);
    }
  });

  saveToLocalStorage();
}

export function getCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cartItem.quantity = newQuantity;
    }
  });

  saveToLocalStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cartItem.deliveryOptionId = deliveryOptionId;
    }
  });

  saveToLocalStorage();
}
