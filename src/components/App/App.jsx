import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Login from '../Login/Login';
import theme from '../../services/theme/theme';

function App({ onSuccess }) {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline enableColorScheme />
      <React.Suspense fallback="...is loading">
        <div className="App">
          <Login id="loginId" onSuccess={onSuccess} />
        </div>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;

App.propTypes = {
  onSuccess: PropTypes.func
};
App.defaultProps = {
  onSuccess: null
};
