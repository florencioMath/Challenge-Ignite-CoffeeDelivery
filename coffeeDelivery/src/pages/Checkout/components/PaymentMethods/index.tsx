import { Bank, CreditCard, CurrencyDollar } from '@phosphor-icons/react';
import { IconLabel } from '../../styles';
import { PaymentMethod, PaymentsContainer, PaymentsWrapper } from './styles';
import { useFormContext } from 'react-hook-form';
import { ErrorsType } from '../CompleteOrderForm';

export function PaymentMethods() {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  return (
    <PaymentsContainer>
      <PaymentsWrapper>
        <PaymentMethod>
          <input
            type="radio"
            value="credit"
            id="credit"
            {...register('paymentMethod')}
          />
          <label htmlFor="credit">
            <IconLabel>
              <CreditCard size={16} />
            </IconLabel>
            Cartão de Crédito
          </label>
        </PaymentMethod>
        <PaymentMethod>
          <input
            type="radio"
            value="debit"
            id="debit"
            {...register('paymentMethod')}
          />
          <label htmlFor="debit">
            <IconLabel>
              <Bank size={16} />
            </IconLabel>
            Cartão de Débito
          </label>
        </PaymentMethod>
        <PaymentMethod>
          <input
            type="radio"
            value="money"
            id="money"
            {...register('paymentMethod')}
          />
          <label htmlFor="money">
            <IconLabel>
              <CurrencyDollar size={16} />
            </IconLabel>
            Dinheiro
          </label>
        </PaymentMethod>
      </PaymentsWrapper>
      <span>{errors.paymentMethod?.message}</span>
    </PaymentsContainer>
  );
}
