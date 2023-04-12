import { ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { CartAmount, ShoppingCartWrapper } from './styles';
import { useCart } from '../../../contexts/CartContext';

export function Cart() {
  const { cartQuantity } = useCart();

  return (
    <Link to={'/checkout'}>
      <ShoppingCartWrapper>
        <ShoppingCart size={22} weight="fill" />
        {cartQuantity >= 1 ? <CartAmount>{cartQuantity}</CartAmount> : null}
      </ShoppingCartWrapper>
    </Link>
  );
}
