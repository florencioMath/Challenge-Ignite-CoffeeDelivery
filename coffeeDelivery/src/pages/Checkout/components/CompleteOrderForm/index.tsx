import { useFormContext } from 'react-hook-form';
import { InputLabelContainer } from '../../styles';
import {
  InputAddressContainer,
  InputNumeroComplementoContainer,
} from './styles';
import { useEffect, useState } from 'react';
import * as zod from 'zod';
import { OrderData } from '../..';

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

interface Address {
  bairro: string;
  cep: string;
  complemento?: string;
  localidade: string;
  logradouro: string;
  uf: string;
}

const cepSchema = zod.object({
  cep: zod.string().min(8).max(8),
});

export function CompleteOrderForm() {
  const { register, formState, setValue } = useFormContext<OrderData>();
  const { errors } = formState as unknown as ErrorsType;

  const [address, setAddress] = useState<Address>({} as Address);
  const [cepMask, setCepMask] = useState('');

  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [uf, setUf] = useState('');

  async function fetchData() {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      method: 'GET',
    }).then((response) => response.json());

    if (response.erro) {
      setCepMask('');
    }

    setValue('logradouro', response.logradouro);
    setValue('localidade', response.localidade);
    setValue('bairro', response.bairro);
    setValue('uf', response.uf);
    setAddress(response);
  }

  function validateCep() {
    const cepOnlyNumbers = cepMask.replace('-', '');

    const validate = cepSchema.safeParse({ cep: cepOnlyNumbers });

    if (validate.success) {
      setCep(validate.data.cep);
      setValue('cep', validate.data.cep);
    }
  }

  function applyZipCodeMask(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;

    const formattedValue = raw
      .replace(/\D/g, '')
      .slice(0, 8)
      .replace(/(\d{5})(\d)/, '$1-$2');

    setCepMask(formattedValue);
  }

  useEffect(() => {
    if (cep.length !== 0) {
      fetchData();
    }
  }, [cep]);

  return (
    <>
      <input
        {...register('cep')}
        type="text"
        id="cep"
        value={cepMask ? cepMask : ''}
        placeholder="CEP"
        onBlur={validateCep}
        onChange={applyZipCodeMask}
        inputMode="decimal"
        defaultValue={address.cep}
      />
      {errors.cep?.message}
      <input
        type="text"
        id="rua"
        placeholder="Rua"
        defaultValue={address.logradouro || logradouro}
        {...register('logradouro')}
        onChange={(event) => setLogradouro(event.target.value)}
      />
      {errors.logradouro?.message}
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
          defaultValue={address.bairro || bairro}
          onChange={(event) => setBairro(event.target.value)}
        />
        {errors.bairro?.message}
        <input
          type="text"
          id="cidade"
          placeholder="Cidade"
          {...register('localidade')}
          defaultValue={address.localidade || localidade}
          onChange={(event) => setLocalidade(event.target.value)}
        />
        {errors.localidade?.message}
        <input
          type="text"
          id="uf"
          placeholder="UF"
          {...register('uf')}
          defaultValue={address.uf || uf}
          onChange={(event) => setUf(event.target.value)}
        />
        {errors.uf?.message}
      </InputAddressContainer>
    </>
  );
}
