import styled, { css } from 'styled-components';

export const SuccessContainer = styled.div`
  margin-top: 184px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleAndSubContainer = styled.div``;

export const TitleAndDeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 32px;
  border: 1px solid black;
  border-radius: 6px 36px 6px 36px;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: Roboto, sans-serif;
  line-height: 130%;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  background: lightgrey;
  border-radius: 9999px;
  padding: 8px;
  color: ${(props) => props.theme['background']};
`;

interface IconItemProps {
  variant?: 'mapPin' | 'timer' | 'currencyDollar';
}

export const IconItem = styled(Icon)<IconItemProps>`
  ${(props) =>
    props.variant === 'mapPin' &&
    css`
      background: ${(props) => props.theme['purple']};
    `}
  ${(props) =>
    props.variant === 'timer' &&
    css`
      background: ${(props) => props.theme['yellow']};
    `}
  ${(props) =>
    props.variant === 'currencyDollar' &&
    css`
      background: ${(props) => props.theme['yellow-dark']};
    `}
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['yellow-dark']};
`;

export const Subtitle = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`;
