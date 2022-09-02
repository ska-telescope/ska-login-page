import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Login from '../Login/Login';
import theme from '../../services/theme/theme';

function App({ onSuccess, onFailure }) {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline enableColorScheme />
      <React.Suspense fallback="...is loading">
        <div className="App">
          <Login id="loginId" onSuccess={onSuccess} onFailure={onFailure}/>
        </div>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
