import styled from "styled-components";

export const InputNumeroComplementoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 0.75rem;

  @media ((min-width: 120px) and (max-width: 960px)) {
    gap: .5rem;
    flex-wrap: wrap;
  }
`;

export const InputAddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 0.75rem;
  @media ((min-width: 120px) and (max-width: 960px)) {
    gap: .5rem;
    flex-wrap: wrap;
  }

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