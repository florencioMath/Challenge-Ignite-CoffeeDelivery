import { Minus, Plus, Trash } from '@phosphor-icons/react';
import {
  CoffeeAmountAndRemoveContainer,
  CoffeeCardCheckoutContainer,
  CoffeeCardCheckoutTitleCoffee,
  CoffeeRemoveButton,
  CoffeeShopAmountContainer,
  CoffeeShopQuantity,
  CoffeeShopQuantityMinusAndPlus,
  IconTrash,
} from './styles';
import { TotalAmountOfCoffees } from '../../styles';
import { CartItem, useCart } from '../../../../contexts/CartContext';

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = coffeeTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase');
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease');
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <CoffeeCardCheckoutContainer>
      <img src={`../../../public/coffees/${coffee.img}`} alt="" />
      <div>
        <CoffeeCardCheckoutTitleCoffee>
          {coffee.name}
        </CoffeeCardCheckoutTitleCoffee>
        <CoffeeAmountAndRemoveContainer>
          <CoffeeShopAmountContainer>
            <CoffeeShopQuantityMinusAndPlus>
              <button
                type="button"
                onClick={handleDecrease}
                disabled={coffee.quantity <= 1}
              >
                <div>
                  <Minus size={14} weight="bold" />
                </div>
              </button>
            </CoffeeShopQuantityMinusAndPlus>
            <CoffeeShopQuantity>{coffee.quantity}</CoffeeShopQuantity>
            <CoffeeShopQuantityMinusAndPlus>
              <button type="button" onClick={handleIncrease}>
                <div>
                  <Plus size={14} weight="bold" />
                </div>
              </button>
            </CoffeeShopQuantityMinusAndPlus>
          </CoffeeShopAmountContainer>
          <button type="button" onClick={handleRemove}>
            <CoffeeRemoveButton>
              <IconTrash>
                <Trash size={16} />
              </IconTrash>{' '}
              Remover
            </CoffeeRemoveButton>
          </button>
        </CoffeeAmountAndRemoveContainer>
      </div>
      <TotalAmountOfCoffees>
        <span>R$ {formattedPrice}</span>
      </TotalAmountOfCoffees>
    </CoffeeCardCheckoutContainer>
  );
}
