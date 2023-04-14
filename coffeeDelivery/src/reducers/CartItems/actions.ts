import { CartItem } from "../../contexts/CartContext";

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  CHANGE_QUANTITY = 'CHANGE_QUANTITY',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAN_CART = 'CLEAN_CART',
}


export function addCoffeeToCart(coffee: CartItem) {
  return {
    type: 'ADD_COFFEE',
    payload: coffee,
  };
}

export function changeCartItemQuantity(
  cartItemId: number,
  type: 'increase' | 'decrease'
) {
  return {
    type: 'CHANGE_QUANTITY',
    payload: { cartItemId, type },
  };
}

export function removeCartItem(cartItemId: number) {
  return {
    type: 'REMOVE_ITEM',
    payload: { cartItemId },
  };
}

export function cleanCart() {
  return { type: 'CLEAN_CART' };
}
