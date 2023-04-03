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
} from './styles';

interface Coffee {
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
      </CoffeeShopContainer>
    </CoffeCard>
  );
}
