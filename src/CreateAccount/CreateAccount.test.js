import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateAccount from './CreateAccount';


it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(
  <Router>
    <CreateAccount />
  </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});