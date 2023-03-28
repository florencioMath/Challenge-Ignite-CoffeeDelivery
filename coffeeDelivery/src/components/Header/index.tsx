import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Switch from '@radix-ui/react-switch';
import { MapPin, Moon, Sun } from '@phosphor-icons/react';
import { Cart } from './components';

import logo from '../../assets/logo.svg';
import {
  Icon,
  LocaleWrapper,
  LogoAndThemeModeContainer,
  NavBar,
  SwitchRootContainer,
  SwitchThumbContainer,
} from './styles';

export function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <NavBar>
      <LogoAndThemeModeContainer>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <SwitchRootContainer>
          <Switch.Root onCheckedChange={() => setDarkMode(!darkMode)}>
            <SwitchThumbContainer>
              <Switch.Thumb>
                {darkMode === true ? <Moon size={18} /> : <Sun size={18} />}
              </Switch.Thumb>
            </SwitchThumbContainer>
          </Switch.Root>
        </SwitchRootContainer>
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
