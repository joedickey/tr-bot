import React from 'react';
import ReactDOM from 'react-dom';
import CreateAccount from './CreateAccount';


it.skip('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<CreateAccount />, div);
  ReactDOM.unmountComponentAtNode(div);
});