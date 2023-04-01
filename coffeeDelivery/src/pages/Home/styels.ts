import styled, { css } from 'styled-components';

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
      background: ${(props) => props.theme['yellow']};
    `}
  ${(props) =>
    props.variant === 'timer' &&
    css`
      background: ${(props) => props.theme['base-text']};
    `}
  ${(props) =>
    props.variant === 'coffee' &&
    css`
      background: ${(props) => props.theme['purple']};
    `}
`;
