import { Bank, CreditCard, CurrencyDollar } from '@phosphor-icons/react';
import { IconLabel } from '../../styles';
import { PaymentMethod } from './styles';
import { useFormContext } from 'react-hook-form';

export function PaymentMethods() {
  const { register } = useFormContext();

  return (
    <>
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
    </>
  );
}
