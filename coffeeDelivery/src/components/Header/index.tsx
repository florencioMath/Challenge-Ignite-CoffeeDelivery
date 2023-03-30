import { Link } from 'react-router-dom';
import { MapPin } from '@phosphor-icons/react';
import { Cart } from './components';

import logo from '../../assets/logo.svg';
import {
  Icon,
  LocaleWrapper,
  LogoAndThemeModeContainer,
  NavBar,
} from './styles';

export function Header() {
  return (
    <NavBar>
      <LogoAndThemeModeContainer>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
      </LogoAndThemeModeContainer>

      <div>
        <LocaleWrapper>
          <Icon>
            <MapPin size={22} weight="fill" />
          </Icon>
          <p>Balneário Camboriú, SC</p>
        </LocaleWrapper>
        <Cart />
      </div>
    </NavBar>
  );
}
