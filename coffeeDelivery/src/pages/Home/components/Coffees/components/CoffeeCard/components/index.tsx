import { ShoppingCart } from '@phosphor-icons/react';
import { ShoppingCartWrapper } from './styles';

export function CartCard() {
  return (
    <ShoppingCartWrapper>
      <ShoppingCart size={22} weight="fill" />
    </ShoppingCartWrapper>
  );
}
