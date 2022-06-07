import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();
  let [username, updateName] = useState("");
  let [password, updatePassword] = useState("");

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
                  <Box component="form" onClick={loginClicked} noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label={t('email')}
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={e => { updateName(e.target.value)}}
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
                      onChange={e => { updatePassword(e.target.value)}}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={!(password.length && username.length)}
                      color="secondary"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      {t('signIn')}
                    </Button>

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
