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

import { useTheme } from '../../contexts/ThemeContext';

export function Header() {
  const { toggleTheme, theme } = useTheme();

  return (
    <NavBar>
      <LogoAndThemeModeContainer>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <SwitchRootContainer>
          <Switch.Root onCheckedChange={toggleTheme}>
            <SwitchThumbContainer>
              <Switch.Thumb>
                {theme.title === 'dark' ? (
                  <Moon size={19} />
                ) : (
                  <Sun size={19} />
                )}
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
