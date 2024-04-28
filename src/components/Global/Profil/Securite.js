import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Security() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sécurité du compte
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Mot de passe Actuel"
            name="Mot de passe"
            label="Mot de passe Actuel"
            fullWidth
            variant="standard"
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            id="Mot de passe nouveau"
            name="Mot de passe nouveau"
            label="Nouveau Mot de passe "
            fullWidth
            variant="standard"
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
              required
              id="nouveau Mot de passe "
              name="nouveau Mot de passe"
              label="Confirmer votre mot de passe"
              fullWidth
              variant="standard"
              type="password"
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
