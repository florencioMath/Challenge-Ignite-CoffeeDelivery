import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
} from '@phosphor-icons/react';
import {
  CheckoutContainer,
  FinishOrderContainer,
  FinishOrderFormCard,
  FinishOrderPaymentCard,
  IconCurrencyDollar,
  IconLabel,
  IconMapPin,
  InfoContainer,
  InputAddressContainer,
  InputLabelContainer,
  InputNumeroComplementoContainer,
  PaymentMethod,
  PaymentMethodContainer,
  SelectedCaffeesCard,
  SelectedCaffeesContainer,
} from './styles';

export function Checkout() {
  return (
    <>
      <CheckoutContainer>
        <FinishOrderContainer>
          <h2>Complete seu pedido</h2>
          <FinishOrderFormCard>
            <InfoContainer>
              <IconMapPin>
                <MapPinLine size={22} />
              </IconMapPin>
              <div>
                <p id="subtitle">Endereço de Entrega</p>
                <p id="text">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </InfoContainer>
            <input type="text" name="cep" id="cep" placeholder="CEP" />
            <input type="text" name="rua" id="rua" placeholder="Rua" />
            <InputNumeroComplementoContainer>
              <input
                type="text"
                name="numero"
                id="numero"
                placeholder="Número"
              />
              <InputLabelContainer>
                <input
                  type="text"
                  name="complemento"
                  id="complemento"
                  placeholder="Complemento"
                />
                <label htmlFor="complemento" id="labelComplemento">
                  Opcional
                </label>
              </InputLabelContainer>
            </InputNumeroComplementoContainer>
            <InputAddressContainer>
              <input
                type="text"
                name="bairro"
                id="bairro"
                placeholder="Bairro"
              />
              <input
                type="text"
                name="cidade"
                id="cidade"
                placeholder="Cidade"
              />
              <input type="text" name="uf" id="uf" placeholder="UF" />
            </InputAddressContainer>
          </FinishOrderFormCard>
          <FinishOrderPaymentCard>
            <InfoContainer>
              <IconCurrencyDollar>
                <CurrencyDollar size={22} />
              </IconCurrencyDollar>
              <div>
                <p id="subtitle">Pagamento</p>
                <p id="text">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </InfoContainer>
            <PaymentMethodContainer>
              <PaymentMethod>
                <input type="radio" name="paymentMethod" id="credit" />
                <label htmlFor="credit">
                  <IconLabel>
                    <CreditCard size={16} />
                  </IconLabel>
                  Cartão de Crédito
                </label>
              </PaymentMethod>
              <PaymentMethod>
                <input type="radio" name="paymentMethod" id="debit" />
                <label htmlFor="debit">
                  <IconLabel>
                    <Bank size={16} />
                  </IconLabel>
                  Cartão de Débito
                </label>
              </PaymentMethod>
              <PaymentMethod>
                <input type="radio" name="paymentMethod" id="money" />
                <label htmlFor="money">
                  <IconLabel>
                    <CurrencyDollar size={16} />
                  </IconLabel>
                  Dinheiro
                </label>
              </PaymentMethod>
            </PaymentMethodContainer>
          </FinishOrderPaymentCard>
        </FinishOrderContainer>
        <SelectedCaffeesContainer>
          <h2>Cafés selecionados</h2>
          <SelectedCaffeesCard></SelectedCaffeesCard>
        </SelectedCaffeesContainer>
      </CheckoutContainer>
    </>
  );
}
