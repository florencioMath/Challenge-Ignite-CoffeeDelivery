import { MapPinLine } from '@phosphor-icons/react';
import {
  CheckoutContainer,
  FinishOrderContainer,
  FinishOrderFormCard,
  FinishOrderPaymentCard,
  IconMapPin,
  InfoContainer,
  InputAddressContainer,
  InputLabelContainer,
  InputNumeroComplementoContainer,
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
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
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
          <FinishOrderPaymentCard></FinishOrderPaymentCard>
        </FinishOrderContainer>
        <SelectedCaffeesContainer>
          <h2>Cafés selecionados</h2>
          <SelectedCaffeesCard></SelectedCaffeesCard>
        </SelectedCaffeesContainer>
      </CheckoutContainer>
    </>
  );
}
