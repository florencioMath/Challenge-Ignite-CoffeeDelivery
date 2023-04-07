import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  max-width: calc(100vw - 20rem);
  width: 1440px;
  padding: 5.75rem 10rem;

  h2 {
    font-size: 1.125rem;
  }

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const FinishOrderContainer = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FinishOrderFormCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;

  input {
    &#cep {
      max-width: 200px;
    }

    &#numero {
      max-width: 200px;
    }
  }
`;

export const InputLabelContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  position: relative;

  input {
    &#complemento {
      max-width: 348px;
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  #labelComplemento {
    max-width: 340px;
    width: 100%;
    position: absolute;
    font-style: italic;
    margin-left: 75%;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const InputNumeroComplementoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 0.75rem;
`;

export const InputAddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 0.75rem;

  input {
    &#bairro {
      width: 200px;
    }

    &#cidade {
      width: 276px;
    }

    &#uf {
      width: 60px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.688rem;
  margin-bottom: 2rem;
`;

export const IconMapPin = styled.div`
  color: ${(props) => props.theme['yellow-dark']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FinishOrderPaymentCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  width: 100%;
  height: 200px;
`;

export const SelectedCaffeesContainer = styled.div`
  max-width: 448px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectedCaffeesCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  width: 100%;
  height: 498px;
`;
