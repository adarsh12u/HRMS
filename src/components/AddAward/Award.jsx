import React from 'react'
import HR_Dashboard from '../Home/HR_Dashboard'
import {Box} from '@mui/material'
import Slidebar from '../Home/Slidebar'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import { styled } from 'styled-components';
import Award_List from './Award_List';
import Add_Award from './Add_Award';
const Div = styled(Box)`
border: 20px solid #3987e0;
  `
// 2c80e0
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
 const Award = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (

    <Box
    component={"div"}
    sx={{
     
    }}
  >
    <HR_Dashboard />
    <Box sx={{ display: "flex" }}>
      <Slidebar />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        <Div sx={{  backgroundColor: "#ffffff"  ,} }>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Award List" {...a11yProps(0)} />
              <Tab label=" Add Award" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Award_List />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Add_Award />
          </CustomTabPanel>
        </Div>
      </Box>
    </Box>
  </Box>
  
  )
}
export default Award
