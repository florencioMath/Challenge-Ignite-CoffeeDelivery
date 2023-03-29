import { useContext, useState } from 'react';
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
import { ThemeContext } from '../../App';

export function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const { toggleTheme, currentTheme } = useContext(ThemeContext);

  function handleToggleTheme() {
    toggleTheme();
  }

  return (
    <NavBar>
      <LogoAndThemeModeContainer>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <SwitchRootContainer>
          <Switch.Root onCheckedChange={handleToggleTheme}>
            <SwitchThumbContainer>
              <Switch.Thumb>
                {currentTheme === 'dark' ? (
                  <Moon size={18} />
                ) : (
                  <Sun size={18} />
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
