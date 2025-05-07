import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.tsx';
import { HashRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/:latitude?/:longitude?/:zoom?"
                    element={<App />}
                />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
);
