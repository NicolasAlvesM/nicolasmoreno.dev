import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
const App = lazy(() => import('./App'));
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
