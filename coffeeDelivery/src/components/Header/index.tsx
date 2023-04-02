import { Link } from 'react-router-dom';
import { MapPin } from '@phosphor-icons/react';
import { Cart } from './components';

import logo from '../../assets/logo.svg';
import {
  Icon,
  LocaleWrapper,
  HeaderContainer,
  Logo,
  LocationAndCartContainer,
} from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
      </Logo>

      <LocationAndCartContainer>
        <LocaleWrapper>
          <Icon>
            <MapPin size={21} weight="fill" />
          </Icon>
          <p>Balneário Camboriú, SC</p>
        </LocaleWrapper>
        <Cart />
      </LocationAndCartContainer>
    </HeaderContainer>
  );
}
