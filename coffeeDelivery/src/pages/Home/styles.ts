import styled, { css } from 'styled-components';
import homeBackground from './assets/home-background.svg';

export const HomeContainer = styled.div`
  margin-top: 104px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.5rem;
  max-width: calc(100vw - 20rem);
  width: 1440px;
  padding: 5.75rem 10rem;
`;

export const BackgroundBlurContainer = styled.div`
  min-width: 100vw;
  height: 544px;
  margin-top: 104px;
  position: absolute;
  z-index: -10;
  background-size: 100%;
  background-image: url(${homeBackground});
  filter: blur(130px);
  -webkit-filter: blur(130px);
`;

export const CoffeeCupContainer = styled.img``;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    width: 36.75rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    max-width: 588px;
    line-height: 130%;
  }
`;

export const ItensContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  width: 36.6875rem;
  margin-top: 4.125rem;
`;

export const Item = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;
  min-width: 14.4375rem;
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const BaseIconItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  min-width: 32px;
  border-radius: 9999px;
  color: ${(props) => props.theme['white']};
  font-weight: 400;
`;

interface IconItemProps {
  variant?: 'shoppingCart' | 'package' | 'timer' | 'coffee';
}

export const IconItem = styled(BaseIconItem)<IconItemProps>`
  ${(props) =>
    props.variant === 'shoppingCart' &&
    css`
      background: ${(props) => props.theme['yellow-dark']};
    `}
  ${(props) =>
    props.variant === 'package' &&
    css`
      background: ${(props) => props.theme['base-text']};
    `}
  ${(props) =>
    props.variant === 'timer' &&
    css`
      background: ${(props) => props.theme['yellow']};
    `}
  ${(props) =>
    props.variant === 'coffee' &&
    css`
      background: ${(props) => props.theme['purple']};
    `}
`;
