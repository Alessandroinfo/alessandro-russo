import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './fonts/roboto-v20-latin-100.woff';
import './fonts/roboto-v20-latin-100.woff2';
import './fonts/roboto-v20-latin-regular.woff';
import './fonts/roboto-v20-latin-regular.woff2';

import './index.html';
import './index.scss';
import './scripts/script';

OfflinePluginRuntime.install();

import App from './components/app';

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
