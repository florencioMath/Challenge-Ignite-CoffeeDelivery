import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react';
import {
  ButtonOrderConfirm,
  CheckoutContainer,
  CoffeesAmountAndPrice,
  CoffeesTotalPrice,
  FinishOrderContainer,
  FinishOrderFormCard,
  FinishOrderPaymentCard,
  IconCurrencyDollar,
  IconMapPin,
  InfoContainer,
  PaymentMethodContainer,
  SelectedCaffeesCard,
  SelectedCoffeesCardContainer,
  SelectedCaffeesContainer,
  TotalContainer,
  CompleteOrderContainer,
} from './styles';
import { CoffeeCartCard } from './components/CoffeeCardCart';
import { useCart } from '../../contexts/CartContext';
import { CompleteOrderForm } from './components/CompleteOrderForm';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { PaymentMethods } from './components/PaymentMethods';
import { useNavigate } from 'react-router-dom';

enum PaymentMethodsEnum {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidatorScheme = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  logradouro: zod.string().min(1, 'Informe o Rua'),
  numero: zod.string().min(1, 'Informe o Número'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  localidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethodsEnum, {
    errorMap: () => {
      return { message: 'Selecione o método de pagamento' };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidatorScheme>;

type ConfirOrderFormData = OrderData;

export function Checkout() {
  const { cartItems, cartItemsTotal, cartQuantity, cleanCart } = useCart();
  const cartTotal = 3.5 + cartItemsTotal;

  const formattedItemsTotal = cartItemsTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });
  const formattedCartTotal = cartTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  const confirmOrderForm = useForm<ConfirOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidatorScheme),
  });

  const { handleSubmit } = confirmOrderForm;
  const navigate = useNavigate();
  function handleConfirmOrder(data: ConfirOrderFormData) {
    navigate('/success', {
      state: data,
    });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer onSubmit={handleSubmit(handleConfirmOrder)}>
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
              <CompleteOrderForm />
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
                <PaymentMethods />
              </PaymentMethodContainer>
            </FinishOrderPaymentCard>
          </FinishOrderContainer>
          <SelectedCaffeesContainer>
            <h2>Cafés selecionados</h2>
            <SelectedCaffeesCard>
              <SelectedCoffeesCardContainer>
                {cartItems.map((coffee) => {
                  return <CoffeeCartCard key={coffee.id} coffee={coffee} />;
                })}
              </SelectedCoffeesCardContainer>
              <TotalContainer>
                <CoffeesAmountAndPrice>
                  <p>Total de itens</p> <span>R$ {formattedItemsTotal}</span>
                </CoffeesAmountAndPrice>
                <CoffeesAmountAndPrice>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </CoffeesAmountAndPrice>
                <CoffeesTotalPrice>
                  <p>Total</p>
                  <span>R$ {formattedCartTotal}</span>
                </CoffeesTotalPrice>
              </TotalContainer>
              <ButtonOrderConfirm disabled={cartQuantity <= 0} type="submit">
                Confirmar pedido
              </ButtonOrderConfirm>
            </SelectedCaffeesCard>
          </SelectedCaffeesContainer>
        </CheckoutContainer>
      </CompleteOrderContainer>
    </FormProvider>
  );
}
