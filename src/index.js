import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import './global.css';
import {ResultsContextProvider} from './contexts/ResultContextProvider';

ReactDOM.render(
    <ResultsContextProvider>
        <Router>
            <App />
        </Router>
    </ResultsContextProvider>,
 document.getElementById('root'));