import React from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../../Global/Topbar';
import {CssBaseline,Box} from "@mui/material";
import Tableau from '../../../Global/tableau';

const TemplateEtudiant=()=>{

    return (
    <React.Fragment>
      <div style={{ margin: 0, padding: 0, height: "100vh", overflowX: "hidden" }}>
        <CssBaseline />
        <Box sx={{ background: "#F2F2F7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Topbar />
          <Box display="flex" flexGrow={1} overflow="auto" style={{ overflowX: "hidden" }}>
            <Sidebar flex="2" />
            <Box marginLeft="25%" /> 

            <Tableau
                columns={[
                  { field: "nom", headerName: "Nom", flex: 1 },
                  { field: "président", headerName: "président", flex: 1 },
                  { field: "email", headerName: "Email", flex: 1 },
                  { field: "date", headerName: "Date de fondation", flex: 1 },
              ]}
              rows={[
                  { id: 1, nom: "ARSSII", président: "Ahmed Maalel", email:"arssii@gmail.com",date: "15/11/2015" },
                  { id: 2, nom: "ATIA", président: "Farah Barika Ktata", email: "atia@gmail.com", date: "02/04/2010" },
                 
              ]}
              link="/ajouterAssociation"
          />
                   
            </Box>
          </Box>
        
      </div>
      
    </React.Fragment>
    )
  }

  
export default TemplateEtudiant;