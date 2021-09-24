import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import PortfolioPage from './components/pages/PortfolioPage'
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
