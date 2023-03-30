import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 104px;
  width: calc(100vw - 20rem);
  position: fixed;
  background: ${(props) => props.theme.colors['background']};

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
  color: ${(props) => props.theme.colors['purple-dark']};
  background: ${(props) => props.theme.colors['purple-light']};
  padding: 8px;
  border-radius: 6px;
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.colors['purple']};
`;

export const SwitchRootContainer = styled.div`
  button {
    width: 42px;
    height: 22px;
    background: ${(props) => props.theme.colors['purple-light']};
    border-radius: 9999px;
    position: relative;
    border: 2px solid ${(props) => props.theme.colors['purple']};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export const SwitchThumbContainer = styled.span`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21px;
    height: 21px;
    background: ${(props) => props.theme.colors['black']};
    color: ${(props) => props.theme.colors['purple']};

    border-radius: 9999px;
    transition: transform 100ms;
    transform: translateX(2px);
    will-change: transform;
    cursor: pointer;

    &[data-state='checked'] {
      transform: translateX(19px);
    }
  }
`;
