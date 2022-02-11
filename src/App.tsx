
import GlobalStyle from './styles/globalStyle';

import { Home } from './components/screen/index';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';
import { Header } from './components/Header';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Home />
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;
