import { AboutContainer, ContentContainer, HomeContainer } from './styels';

import heroLogo from './assets/hero-logo.png';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

export function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <AboutContainer>
            <ContentContainer>
              <div>
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <span>
                  <Package size={16} weight="fill" />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </div>
            </ContentContainer>
            <ContentContainer>
              <div>
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div>
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                <p>O café chega fresquinho até você</p>
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
