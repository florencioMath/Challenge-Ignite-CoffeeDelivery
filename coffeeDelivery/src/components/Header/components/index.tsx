import { ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { CartAmount, ShoppingCartWrapper } from './styles';

export function Cart() {
  const cartTotal: number = 0;
  return (
    <Link to={'/checkout'}>
      <ShoppingCartWrapper>
        <ShoppingCart size={22} weight="fill" />
        {cartTotal > 0 ? <CartAmount>{cartTotal}</CartAmount> : null}
      </ShoppingCartWrapper>
    </Link>
  );
}
