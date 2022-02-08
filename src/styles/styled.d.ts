import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    
    colors: {
      header: string;
      title: string;
      line: string;

      background: string;
      text: string;
    }
  }
}