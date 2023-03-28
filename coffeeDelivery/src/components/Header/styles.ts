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
`;

export const Icon = styled.div`
  color: ${(props) => props.theme['purple']};
`;

export const SwitchRootContainer = styled.div`
  button {
    width: 42px;
    height: 25px;
    background-color: ${(props) => props.theme['black']};
    border-radius: 9999px;
    position: relative;
    border: 2px solid ${(props) => props.theme['purple-light']};
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
    background-color: ${(props) => props.theme['white']};
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
