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
  z-index: 1000;

  @media ((min-width: 320px) and (max-width: 960px)) {
    padding: 0px 1rem;
    justify-content: space-between;
    width: 100%;
  }
`;

export const LocationAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 38px;

  @media ((min-width: 320px) and (max-width: 960px)) {
    gap: 0.75rem;
  }
`;

export const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ((min-width: 320px) and (max-width: 960px)) {
    img {
      height: 38px;
      width: 50px;
    }
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

  @media ((min-width: 320px) and (max-width: 960px)) {
      height: 38px;
      width: 80px;

      p {
        font-size: .5rem;
      }
  }
`;

export const Icon = styled.div`
  color: ${(props) => props.theme['purple']};
  display: flex;
  align-items: center;

  @media ((min-width: 320px) and (max-width: 960px)) {
      height: 12px;
      width: 12px;
  }
`;
