import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin-top: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5.75rem 0;
`;

export const CallToActionContainer = styled.div`
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    max-width: 600px;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-top: 1rem;
    max-width: 588px;
    line-height: 130%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin-top: 4.125rem;
`;

export const ContentContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 1.25rem;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      display: flex;
    }
  }

  span {
    background: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 32px;
    min-width: 32px;
    border-radius: 9999px;
    color: ${(props) => props.theme['white']};
  }
`;
