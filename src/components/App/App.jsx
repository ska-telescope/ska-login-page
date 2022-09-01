import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Login from '../Login/Login';
import theme from '../../services/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline enableColorScheme />
      <React.Suspense fallback="...is loading">
        <div className="App">
          <Login id="loginId" />
        </div>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
