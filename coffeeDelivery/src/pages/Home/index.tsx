import {
  DescriptionContainer,
  ItensContainer,
  HomeContainer,
  IconItem,
  Item,
  CoffeeCupContainer,
  BackgroundBlurContainer,
} from './styles';

import heroLogo from './assets/hero-logo.png';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { Coffees } from './components/Coffees';

export function Home() {
  return (
    <>
      <BackgroundBlurContainer />
      <HomeContainer>
        <DescriptionContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ItensContainer>
            <Item>
              <IconItem variant="shoppingCart">
                <ShoppingCart size={16} weight="fill" />
              </IconItem>
              Compra simples e segura
            </Item>
            <Item>
              <IconItem variant="package">
                <Package size={16} weight="fill" />
              </IconItem>
              Embalagem mantém o café intacto
            </Item>
            <Item>
              <IconItem variant="timer">
                <Timer size={16} weight="fill" />
              </IconItem>
              Entrega rápida e rastreada
            </Item>
            <Item>
              <IconItem variant="coffee">
                <Coffee size={16} weight="fill" />
              </IconItem>
              O café chega fresquinho até você
            </Item>
          </ItensContainer>
        </DescriptionContainer>

        <CoffeeCupContainer src={heroLogo} alt="" />
      </HomeContainer>
      <Coffees />
    </>
  );
}
