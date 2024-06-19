import { useEffect, useContext, lazy } from 'react';

import { ThemeContext } from './context/ThemeContext';
import { Theme } from './context/types';
const Home = lazy(() => import('./pages/home'));
import globalStyles from './styles/global';

function App() {
    const { applyTheme, getPreferredTheme } = useContext(ThemeContext);

    useEffect(() => {
        const preferredTheme = getPreferredTheme();
        if (preferredTheme != null) applyTheme(preferredTheme as Theme);
    }, []);

    globalStyles();

    return <Home />;
}

export default App;
