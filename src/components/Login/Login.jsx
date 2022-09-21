import React, { useState } from 'react';

import { Box, Button, Card, CardContent, Grid, Paper, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';

import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
  const [username, updateName] = useState('');
  const [password, updatePassword] = useState('');

  function loginClicked() {
    //
    // TODO
    // Validate login details are valid.
    // Invalid : Return with an error message and update the screen accordingly
    // Valid : Store in redux and pass control back to the landing page.
    //
    // Future
    // Retrieve/Store access token
    // Retrieve/Store RBAC information
    //
  }

  function cancelClicked() {
    //
    // TODO
    // Validate login details are valid.
    // Invalid : Return with an error message and update the screen accordingly
    // Valid : Store in redux and pass control back to the landing page.
    //
    // Future
    // Retrieve/Store access token
    // Retrieve/Store RBAC information
    //
  }

  return (
    <div id="loginId">
      <Paper elevation={0} sx={{ height: '100%', width: '100%' }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={3}>
            <Box>
              <Card variant="outlined">
                <CardContent>
                  <Typography component="h1" variant="h5">
                    {t('signIn')}
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label={t('email')}
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={e => {
                        updateName(e.target.value);
                      }}
                    />

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label={t('password')}
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={e => {
                        updatePassword(e.target.value);
                      }}
                    />
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          disabled={!(password.length && username.length)}
                          color="secondary"
                          sx={{ mt: 3, mb: 2 }}
                          startIcon={<LoginIcon />}
                          onClick={() => loginClicked}
                        >
                          {t('signIn')}
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          color="error"
                          sx={{ mt: 3, mb: 2 }}
                          startIcon={<Logout />}
                          onClick={() => cancelClicked}
                        >
                          {t('cancel')}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Login;
