import React from 'react';
import Sidebar from './Dashboard/Sidebar';
import Topbar from '../../components/Global/Topbar';
import {CssBaseline,Box} from "@mui/material";


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

            
                   
            </Box>
          </Box>
        
      </div>
      
    </React.Fragment>
    )
  }

  
export default TemplateEtudiant;