import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 104px;
  width: calc(100vw - 20rem);
  position: fixed;
  background: ${(props) => props.theme['background']};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    height: 38px;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 10rem);
  }
`;

export const LogoAndThemeModeContainer = styled.div`
  gap: 2rem !important;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LocaleWrapper = styled.div`
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
  padding: 8px;
  border-radius: 6px;
  gap: 0.3rem !important;
`;

export const Icon = styled.div`
  color: ${(props) => props.theme['purple']};
`;
