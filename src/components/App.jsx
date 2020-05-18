import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import ChartMap from './ChartMap';

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={ChartMap} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;