
import GlobalStyle from './styles/globalStyle';

import { Home } from './components/screen/index';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
