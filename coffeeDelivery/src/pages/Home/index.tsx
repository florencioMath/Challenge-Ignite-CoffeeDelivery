import {
  AboutContainer,
  CallToActionContainer,
  ContentContainer,
  HomeContainer,
  IconItem,
} from './styels';

import heroLogo from './assets/hero-logo.png';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

export function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <CallToActionContainer>
            <div>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
          </CallToActionContainer>

          <AboutContainer>
            <ContentContainer>
              <div>
                <div>
                  <IconItem variant="shoppingCart">
                    <ShoppingCart size={16} weight="fill" />
                  </IconItem>
                  <p>Compra simples e segura</p>
                </div>
              </div>
              <div>
                <div>
                  <IconItem variant="package">
                    <Package size={16} weight="fill" />
                  </IconItem>
                  <p>Embalagem mantém o café intacto</p>
                </div>
              </div>
            </ContentContainer>
            <ContentContainer>
              <div>
                <div>
                  <IconItem variant="timer">
                    <Timer size={16} weight="fill" />
                  </IconItem>
                  <p>Entrega rápida e rastreada</p>
                </div>
              </div>
              <div>
                <div>
                  <IconItem variant="coffee">
                    <Coffee size={16} weight="fill" />
                  </IconItem>
                  <p>O café chega fresquinho até você</p>
                </div>
              </div>
            </ContentContainer>
          </AboutContainer>
        </div>

        <div>
          <img src={heroLogo} alt="" />
        </div>
      </HomeContainer>
    </>
  );
}
