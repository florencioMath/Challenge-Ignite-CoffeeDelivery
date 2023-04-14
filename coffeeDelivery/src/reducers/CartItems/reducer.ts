import produce from "immer";
import { CartItem } from "../../contexts/CartContext"

interface Action {
  type: string
  payload?: any
}

export const cartReducer = (state: CartItem[], action: Action) => {
  switch (action.type) {
    case 'ADD_COFFEE':
      const coffeeAlreadyExistsInCart = state.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (coffeeAlreadyExistsInCart < 0) {
        return produce(state, (draft) => {
          draft.push(action.payload);
        });
      } else {
        return produce(state, (draft) => {
          draft[coffeeAlreadyExistsInCart].quantity += action.payload.quantity;
        });
      }
    case 'CHANGE_QUANTITY':
      const coffeeExistsInCart = state.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId
      );
      if (coffeeExistsInCart >= 0) {
        const item = state[coffeeExistsInCart];
        return produce(state, (draft) => {
          draft[coffeeExistsInCart].quantity =
            action.payload.type === 'increase'
              ? item.quantity + 1
              : item.quantity - 1;
        });
      }
    case 'REMOVE_ITEM':
      const coffeeToRemoveIndex = state.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId
      );
      if (coffeeToRemoveIndex >= 0) {
        return produce(state, (draft) => {
          draft.splice(coffeeToRemoveIndex, 1);
        });
      }
    case 'CLEAN_CART':
      return [];
    default:
      return state;
  }
};