import { useFormContext } from 'react-hook-form';
import { InputLabelContainer } from '../../styles';
import {
  InputAddressContainer,
  InputNumeroComplementoContainer,
} from './styles';

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function CompleteOrderForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;

  return (
    <>
      <input type="text" id="cep" placeholder="CEP" {...register('cep')} />
      {errors.cep?.message}
      <input type="text" id="rua" placeholder="Rua" {...register('rua')} />
      {errors.rua?.message}
      <InputNumeroComplementoContainer>
        <input
          type="text"
          id="numero"
          placeholder="Número"
          {...register('numero')}
        />
        {errors.numero?.message}
        <InputLabelContainer>
          <input
            type="text"
            id="complemento"
            placeholder="Complemento"
            {...register('complemento')}
          />
          <label htmlFor="complemento" id="labelComplemento">
            Opcional
          </label>
        </InputLabelContainer>
      </InputNumeroComplementoContainer>
      <InputAddressContainer>
        <input
          type="text"
          id="bairro"
          placeholder="Bairro"
          {...register('bairro')}
        />
        {errors.bairro?.message}
        <input
          type="text"
          id="cidade"
          placeholder="Cidade"
          {...register('cidade')}
        />
        {errors.cidade?.message}
        <input type="text" id="uf" placeholder="UF" {...register('uf')} />
        {errors.uf?.message}
      </InputAddressContainer>
    </>
  );
}
