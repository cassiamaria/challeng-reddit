import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    
    colors: {
      headerBackground: string;
      purple: string;
      line: string;
      background: string;
      text: string
    }
  }
}