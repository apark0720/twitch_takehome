import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { initGlobals } from './globals';

initGlobals();

const appDiv = document.createElement('div');
document.body.appendChild(appDiv);

ReactDOM.render(<App />, appDiv);

console.info('Initialized ventura.');
