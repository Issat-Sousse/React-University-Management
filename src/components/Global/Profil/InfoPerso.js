import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function PersonalInformationForm() {
  const [gender, setGender] = React.useState(''); // Initial state for gender

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

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
        {/* First row: CIN and Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="CIN"
            name="CIN"
            label="CIN"
            fullWidth
            defaultValue="12345678" 
            variant="standard"
            inputProps={{ maxLength: 8, onInput: handleNumberInput }} // Limit to 8 digits and allow only numbers
          />
        </Grid>
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

        {/* Second row: Date et lieu de naissance */}
        <Grid item xs={12}>
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

        {/* Third row: Genre and nationalité, similar to CIN and Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            select
            label="Genre"
            value={gender}
            onChange={handleChangeGender}
            sx={{ minWidth: 120 }} // Adjust width as needed
          >
            <MenuItem value="">
              <em>Sélectionnez votre genre</em>
            </MenuItem>
            <MenuItem value="male">Masculin</MenuItem>
            <MenuItem value="female">Féminin</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nationality"
            name="nationality"
            label="Nationalité"
            fullWidth
            variant="standard"
            marginLeft={4} 
            defaultValue="Tunisienne"
          />
        </Grid>

        {/* Fourth row: Phone number and email, similar to CIN and Name */}
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
      </Grid>
    </React.Fragment>
  );
}
