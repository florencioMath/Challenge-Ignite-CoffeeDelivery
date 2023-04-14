import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { Coffee } from '../pages/Home/components/Coffees/components/CoffeeCard';
import { produce } from 'immer';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  cartQuantity: number;
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cartItemsTotal: number;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = 'florencioMath-coffeeDelivery:CartItems';

const cartReducer = (state: CartItem[], action: any) => {
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

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, dispatch] = useReducer(cartReducer, [], (initialValue) => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    } else {
      return initialValue;
    }
  });
  const cartQuantity = cartItems.length;
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    dispatch({
      type: 'ADD_COFFEE',
      payload: coffee,
    });
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    dispatch({
      type: 'CHANGE_QUANTITY',
      payload: { cartItemId, type },
    });
  }

  function removeCartItem(cartItemId: number) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { cartItemId },
    });
  }

  function cleanCart() {
    dispatch({ type: 'CLEAN_CART' });
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const value: CartContextType = {
    cartItems,
    addCoffeeToCart,
    cartQuantity,
    changeCartItemQuantity,
    removeCartItem,
    cartItemsTotal,
    cleanCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
