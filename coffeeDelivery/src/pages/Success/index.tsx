import {
  DeliveryInfo,
  DeliveryInfoContainer,
  Icon,
  IconItem,
  IllustrationSucceessContainer,
  Subtitle,
  SuccessContainer,
  Title,
  TitleAndDeliveryInfoContainer,
  TitleAndSubContainer,
} from './styles';
import IllustrationSucceess from './assets/success-illustration.svg';
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';

export function CheckoutSuccess() {
  return (
    <SuccessContainer>
      <TitleAndDeliveryInfoContainer>
        <TitleAndSubContainer>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </TitleAndSubContainer>
        <DeliveryInfoContainer>
          <DeliveryInfo>
            <IconItem variant="mapPin">
              <MapPin size={16} weight="fill" />
            </IconItem>
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> <br />
              Farrapos - Porto Alegre, RS
            </p>
          </DeliveryInfo>
          <DeliveryInfo>
            <IconItem variant="timer">
              <Timer size={16} weight="fill" />
            </IconItem>
            <p>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </p>
          </DeliveryInfo>
          <DeliveryInfo>
            <IconItem variant="currencyDollar">
              <CurrencyDollar size={16} />
            </IconItem>
            <p>
              Pagamento na entrega <br />
              <b>Cartão de Crédito</b>
            </p>
          </DeliveryInfo>
        </DeliveryInfoContainer>
      </TitleAndDeliveryInfoContainer>
      <IllustrationSucceessContainer>
        <img src={IllustrationSucceess} alt="" />
      </IllustrationSucceessContainer>
    </SuccessContainer>
  );
}
