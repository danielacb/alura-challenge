import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import Header from 'components/Header';
import CodeEditorPage from 'pages/CodeEditor';
import Community from 'pages/Community';
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
            <Route exact path="/" component={CodeEditorPage} />
            <Route path="/community/:projectId/:projectTitle" component={UpdateCode} />
            <Route path="/community" component={Community} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
