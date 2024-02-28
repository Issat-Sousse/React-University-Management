import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function UniversityInformationForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informations universitaires
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="academicSpecialization"
            name="academicSpecialization"
            label="Spécialité universitaire"
            fullWidth
            variant="standard"
            defaultValue="ING A2 GL"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="diplomaToPrepare"
            name="diplomaToPrepare"
            label="Diplome à préparer"
            fullWidth
            variant="standard"
            defaultValue="Ingénieur"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="universityStatus"
            name="universityStatus"
            label="Situation universitaire"
            fullWidth
            variant="standard"
            defaultValue="Ancien"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
