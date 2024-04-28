import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function PersonalInformationForm() {
  const handleNumberInput = (event) => {
    // Allow only digits and limit to 8 characters
    const newValue = event.target.value.replace(/[^0-9]/g, '').slice(0, 8);
    event.target.value = newValue;
  };

  const handleEmailInput = (event) => {
    // Basic email format validation
    const validEmailRegex = /\S+@\S+\.\S+/;
    const isValid = validEmailRegex.test(event.target.value);
    if (!isValid) {
      // Set error state or display warning message based on your needs
      console.error('Invalid email format');
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informations personelles
      </Typography>
      <Grid container spacing={3}>
        {/* First row: name and email*/}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Nom et Prénom"
            fullWidth
            variant="standard"
            defaultValue="Sahar Youssef"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            autoComplete="email"
            defaultValue="saharyoussef@gmail.com"
            onBlur={handleEmailInput} // Validation on blur (losing focus)
          />
        </Grid>


        {/* Second row: Date et lieu de naissance et adresse */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date et lieu de naissance"
            fullWidth
            variant="standard"
            defaultValue="Sousse le 20/05/2000"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="adress"
            name="adress"
            label="Adresse"
            fullWidth
            variant="standard"
            defaultValue="Sousse"
          />
        </Grid>

        {/* third row: Phone numbers */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Numéro de telephone"
            fullWidth
            variant="standard"
            autoComplete="tel"
            defaultValue="54789632"
            inputProps={{ onInput: handleNumberInput }} // Allow only digits
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="2éme Numéro de telephone"
            fullWidth
            variant="standard"
            autoComplete="tel"
            defaultValue="50789632"
            inputProps={{ onInput: handleNumberInput }} // Allow only digits
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
