import { Minus, Plus } from '@phosphor-icons/react';
import { CartCard } from './components';
import {
  ImageContainer,
  TagContainer,
  TagIten,
  CoffeCard,
  CoffeeName,
  CoffeeDescription,
  CoffeePrice,
  CoffeePriceCurrency,
  CoffeeShopContainer,
  CoffeeShopAmountContainer,
  CoffeeShopQuantity,
  CoffeeShopQuantityMinusAndPlus,
} from './styles';
import { useCart } from '../../../../../../contexts/CartContext';
import { useState } from 'react';

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  img: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <CoffeCard>
      <ImageContainer src={`/coffees/${coffee.img}`} alt="" />
      <TagContainer>
        {coffee.tags.map((tag) => {
          return <TagIten key={tag}>{tag}</TagIten>;
        })}
      </TagContainer>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CoffeeShopContainer>
        <CoffeePrice>
          <CoffeePriceCurrency>R$ </CoffeePriceCurrency>
          {coffee.price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}
        </CoffeePrice>
        <CoffeeShopAmountContainer>
          <CoffeeShopQuantityMinusAndPlus>
            <button
              type="button"
              disabled={quantity <= 1}
              onClick={handleDecrease}
            >
              <div>
                <Minus size={14} weight="bold" />
              </div>
            </button>
          </CoffeeShopQuantityMinusAndPlus>
          <CoffeeShopQuantity>{quantity}</CoffeeShopQuantity>
          <CoffeeShopQuantityMinusAndPlus>
            <button type="button" onClick={handleIncrease}>
              <div>
                <Plus size={14} weight="bold" />
              </div>
            </button>
          </CoffeeShopQuantityMinusAndPlus>
        </CoffeeShopAmountContainer>
        <button type="button" onClick={handleAddToCart}>
          <CartCard />
        </button>
      </CoffeeShopContainer>
    </CoffeCard>
  );
}
