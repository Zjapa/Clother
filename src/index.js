import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { MainProvider } from './contexts/main.context';

import './index.scss';

const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
        <BrowserRouter>
            <MainProvider>
                <App />
            </MainProvider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
