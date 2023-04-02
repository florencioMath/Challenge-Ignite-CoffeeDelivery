import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 104px;
  width: 100vw;
  padding: 0px 25rem;
  position: fixed;
  background: ${(props) => props.theme['background']};
`;

export const LocationAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 38px;
`;

export const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LocaleWrapper = styled.div`
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  gap: 0.3rem !important;
`;

export const Icon = styled.div`
  color: ${(props) => props.theme['purple']};
`;
