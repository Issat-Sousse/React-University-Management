import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoPersonnelle from './InfoPerso'; 
import Securite from './Securite'; 
import Topbar from '../Topbar'; 
import Sidebar from '../../Etudiant/Dashboard/Sidebar'; 

const steps = ['Informations Personnelles', 'Sécurité du compte'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InfoPersonnelle />;
    case 1:
      return <Securite />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Profil() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <div style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}>
        <CssBaseline />
        <Box sx={{ background: "#F2F2F7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Topbar />
          <Box display="flex" flexGrow={1} overflow="auto" style={{ overflowX: "hidden" }}>
            <Sidebar flex="2" />
            <Box marginLeft="25%" />
            <Box
              width="calc(100% - 25%)"
              height="75vh"
              marginRight="5%"
              marginTop="2%"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                  backgroundColor: "white", 
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiDataGrid-columnHeader": {
                  backgroundColor: "#1976d2", 
                  color: "white",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold",
                },
                "& .MuiDataGrid-virtualScroller": {},
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                },
              }}
            >
              <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                  <Typography component="h1" variant="h4" align="center">
                    {/* Add your profile title here */}
                  </Typography>
                  <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom>
                        Modification Réussie.
                      </Typography>
                      <Typography variant="subtitle1">
                        Tu peux trouver tes informations dans ton profil.
                      </Typography>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {getStepContent(activeStep)}
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {activeStep !== 0 && (
                          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                            Précédent
                          </Button>
                        )}

                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          {activeStep === steps.length - 1 ? 'Confirmer' : 'Suivant'}
                        </Button>
                      </Box>
                    </React.Fragment>
                  )}
                </Paper>
              </Container>
            </Box>
          </Box>
        </Box>
      </div>
      
    </React.Fragment>
  );
}