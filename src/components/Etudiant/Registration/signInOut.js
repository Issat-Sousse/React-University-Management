import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Registration from './Registration';
import Login from "../../Global/Login";

const signInOut =()=>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const boxStyle ={width:300,margin:"20px auto"}

    function TabPanel(props){
        const{children,value,index,...other} = props;
        return(
            <div 
                role="tabpanel"
                hidden={value !==index}
                {...other}
                >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        )
    }

  return (
    <Box
    style={boxStyle} 
    sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Login" />
        <Tab label="Registration" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange}></Login>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Registration></Registration>
      </TabPanel>
    </Box>
  );
}

export default signInOut;
