// src/index.js

import React from 'react';
import ReactDom from 'react-dom/client';
import { App } from './App';

ReactDom.createRoot(
    document.getElementById('root')
).render(<App />);