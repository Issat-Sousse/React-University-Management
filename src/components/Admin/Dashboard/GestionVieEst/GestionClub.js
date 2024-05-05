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
                    { id: 1, nom: "IEEE", président: "Sahar Youssef", email:"ISSATSO@ieee.org",date: "15/11/2015" },
                    { id: 2, nom: "Microsoft", président: "Ahmed Ben Youssef", email: "microsoft@example.com", date: "02/04/1975" },
                    { id: 3, nom: "GDSC", président: "Mouna Ben Salah", email: "gdsc@example.com", date: "15/09/2017" },
                    { id: 4, nom: "CyberTrace", président: "Fatma Khedher", email: "cybertrace@example.com", date: "10/02/2019" },
                    { id: 5, nom: "ISSATRONIC", président: "Mohamed Ali Ben Mansour", email: "issatronic@example.com", date: "20/06/2015" },
                    { id: 6, nom: "ARSSII", président: "Sami Ben Mahmoud", email: "arssii@example.com", date: "08/11/2012" },
                    { id: 7, nom: "Nateg", président: "Amira Ben Ali", email: "nateg@example.com", date: "30/03/2014" },
                    { id: 8, nom: "Electrodev", président: "Nizar Ben Ammar", email: "electrodev@example.com", date: "05/08/2016" },
                    { id: 9, nom: "Tunivisions", président: "Amine Ben Saïd", email: "tunivisions@example.com", date: "18/10/2010" },
                    { id: 10, nom: "Panoramix", président: "Nour Ben Jemaa", email: "panoramix@example.com", date: "25/12/2013" },
                    { id: 11, nom: "Rythmino", président: "Sara Ben Amor", email: "rythmino@example.com", date: "14/07/2018" },
                    { id: 12, nom: "Spark", président: "Aymen Ben Naceur", email: "spark@example.com", date: "03/06/2011" }
                   
                ]}
            />

                   
            </Box>
          </Box>
        
      </div>
      
    </React.Fragment>
    )
  }

  
export default TemplateEtudiant;