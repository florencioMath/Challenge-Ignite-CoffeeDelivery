import styled from "styled-components";

export const PaymentMethod = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  input[type='radio'] {
    height: 51px;
    width: 100%;
    width: 180px;
    appearance: none;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
  }

  input[type='radio']:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  input[type='radio']:checked {
    border: 1px solid ${(props) => props.theme['purple']};
  }

  label {
    position: relative;
    height: 51px;
    width: 100%;
    width: 180px;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    font-family: Roboto, sans-serif;
  }
`;

export const PaymentsWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.75rem;
  width: 100%;

  @media ((min-width: 320px) and (max-width: 960px)) {
    flex-wrap: wrap;
  }
`;

export const PaymentsContainer = styled.div`

display: flex;
gap: 0.75rem;
flex-direction: column;

  span {
    margin-top: .5rem;
    align-self: center;
    font-size: 1rem;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    color: red;
  }
`;