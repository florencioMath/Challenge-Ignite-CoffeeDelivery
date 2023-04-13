import { InputLabelContainer } from '../../styles';
import {
  CompleteOrderContainer,
  InputAddressContainer,
  InputNumeroComplementoContainer,
} from './styles';

export function CompleteOrderForm() {
  return (
    <CompleteOrderContainer>
      <input type="text" name="cep" id="cep" placeholder="CEP" />
      <input type="text" name="rua" id="rua" placeholder="Rua" />
      <InputNumeroComplementoContainer>
        <input type="text" name="numero" id="numero" placeholder="Número" />
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
        <input type="text" name="bairro" id="bairro" placeholder="Bairro" />
        <input type="text" name="cidade" id="cidade" placeholder="Cidade" />
        <input type="text" name="uf" id="uf" placeholder="UF" />
      </InputAddressContainer>
    </CompleteOrderContainer>
  );
}
