import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';

import main from './styles/themes/main';

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <div className="App">
        <h1>Alura Challenge</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
