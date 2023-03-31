import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin-top: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5.75rem 0;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    max-width: 600px;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin-top: 4.125rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
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

export const ContentContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1.25rem;
  }
`;
