import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import Header from 'components/Header';
import EditorDeCodigo from 'pages/EditorDeCodigo';
import Comunidade from 'pages/Comunidade';
import UpdateCode from 'pages/UpdateCode';

import main from './styles/themes/main';

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={EditorDeCodigo} />
            <Route path="/comunidade/:projectId/:projectTitle" component={UpdateCode} />
            <Route path="/comunidade" component={Comunidade} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
