class ShoppingCart {
  id: number = 0;
  cart: null | [];

  constructor() {
    this.cart = [];
  }
  getCart() {
    return this.cart;
  }
  getCartLength() {
    return this.cart?.length;
  }
  addToCart(item: any) {
    this.cart?.push(item);
  }
}

const cart = Object.freeze(new ShoppingCart());

export { cart };
