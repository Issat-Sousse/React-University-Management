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
                { field: "evenement", headerName: "Événement", flex: 1 },
                { field: "date", headerName: "Date", flex: 1 },
                { field: "participants", headerName: "Participants", flex: 1 },
              ]}
              rows={[
                { id: 1, evenement: "Forum d'entreprise ISSATSO", date: "12/03/2022", participants: 150 },
                { id: 2, evenement: "Focus Day", date: "05/05/2022", participants: 200 },
                { id: 3, evenement: "Journée de recrutement", date: "20/07/2022", participants: 100 },
                { id: 4, evenement: "Journée de startups", date: "10/09/2022", participants: 120 },
              ]}
          />

            
                   
            </Box>
          </Box>
        
      </div>
      
    </React.Fragment>
    )
  }

  
export default TemplateEtudiant;