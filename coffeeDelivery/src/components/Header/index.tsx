import { MapPin } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Cart } from './components';
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
        <div>[DarkMode]</div>
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
