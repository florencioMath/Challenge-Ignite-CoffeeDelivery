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
            <div>
              <Minus size={14} weight="bold" />
            </div>
          </CoffeeShopQuantityMinusAndPlus>
          <CoffeeShopQuantity>1</CoffeeShopQuantity>
          <CoffeeShopQuantityMinusAndPlus>
            <div>
              <Plus size={14} weight="bold" />
            </div>
          </CoffeeShopQuantityMinusAndPlus>
        </CoffeeShopAmountContainer>
        <CartCard />
      </CoffeeShopContainer>
    </CoffeCard>
  );
}
