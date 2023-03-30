import { defaultTheme } from './../themes/default';
import 'styled-components';
import { defaultTheme } from '../themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    title: string;
    colors: {
      white: string;
      background: string;
      black: string;

      'base-title': string;
      'base-subtitle': string;
      'base-text': string;
      'base-label': string;
      'base-hover': string;
      'base-button': string;
      'base-inpuut': string;
      'base-card': string;

      //Product
      yellow: string;
      'yellow-light': string;
      'yellow-dark': string;
      purple: string;
      'purple-light': string;
      'purple-dark': string;
    };
  }
}
