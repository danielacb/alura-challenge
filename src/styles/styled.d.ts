import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      black: string;
      defaultCodeBgColor: string;
      blue100: string;
      blue200: string;
      blue300: string;
      darkBlue: string;
      darkGray: string;
    };

    shadow: string;
  }
}
