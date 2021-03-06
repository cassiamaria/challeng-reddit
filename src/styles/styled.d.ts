import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title?: string;
    
    colors: {
      header?: string;
      title?: string;
      titleHeader?: string;
      line?: string;
      purple?: string;

      background?: string;
      text?: string;
    }
  }
}