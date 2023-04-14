import {
  DeliveryInfo,
  DeliveryInfoContainer,
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
import { OrderData } from '../Checkout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface LocationType {
  state: OrderData;
}

const paymentMethodsDescription = {
  credit: {
    label: 'Cartão de Crédito',
  },
  debit: {
    label: 'Cartão de Débito',
  },
  money: {
    label: 'Pagamento em Dinheiro',
  },
};

export function CheckoutSuccess() {
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  if (!state) return <></>;

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
              Entrega em{' '}
              <b>
                {state.logradouro}, {state.numero}
              </b>{' '}
              <br />
              {state.bairro} - {state.localidade}, {state.uf}
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
              <b>{paymentMethodsDescription[state.paymentMethod].label}</b>
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
