import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { CounterAccordion } from './pages/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<FooterTest />, document.getElementById('footer'));
// registerServiceWorker();