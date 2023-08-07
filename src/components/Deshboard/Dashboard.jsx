import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HR_Dashboard from '../Home/HR_Dashboard';
import Slidebar from '../Home/Slidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../Dash.css'
import Charts from './Chart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import CountUp from 'react-countup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dashboard = () => {

    const navigate = useNavigate();
  const Dashboard = async () => {
    let token = localStorage.getItem("token");
   
    axios
      .get("http://localhost:4000/api/valid", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        //   console.log(res.data);

        if (res.data.status == 400 || !res.data) {
          console.log("error page redirect");
        } else {
          console.log("userverify");
        }
      })
      .catch((err) => {
        navigate("*");
      });
  };
  useEffect(() => {
    Dashboard();
  }, []);
   
  return (
  <>
   <div className='bgcolor' >
   
    <HR_Dashboard />
    <Box sx={{ display: "flex" }}>
      <Slidebar />
     
  
    <Box ml={2} sx={{ flexGrow: 1 }} height={70}>
      <Grid container spacing={2}>
        <Grid item xs={11} sm={8}>
        <Stack spacing={2} direction={'row'}>
        <Card sx={{ minWidth: 49 + "%" , height:150}} className='gradient'>
    
      <CardContent>
        <div>
      <PersonIcon/>
      </div>
        <Typography gutterBottom variant="h5" component="div">
        
        <CountUp duration={1}  start={0}
    end={500.00} />
        
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{
          color:"#ccd1d1",
        }}>
          Total employee
        </Typography>
      </CardContent>
     
    </Card>
        <Card sx={{ minWidth: 49 + "%" , height:150}} className='gradient'>
    
      <CardContent>

      <div>
      <EmojiEventsIcon/>
      </div>

       
        <Typography gutterBottom variant="h5" component="div">
        <CountUp start={0} duration={1}  end={500.00} />
       
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{
          color:"#ccd1d1",
        }}>
          Total Awards
        </Typography>
        </CardContent>
     
    </Card>
    </Stack>
        </Grid>
       
       
        <Grid item xs={11}  sm={4}>
        <Stack spacing={2} >
        <Card sx={{ maxWidth: 345 }} className='gradient2' >
    
    
        <Stack spacing={2} ></Stack>
      <div className='income
      '>
    $ <CountUp start={0} duration={1}  end={50000} />
       
    <div>total income</div>
    </div>
     
     
    </Card>
    <Card sx={{ maxWidth: 345 }} className='gradient2' >
    
    
        <Stack spacing={2} ></Stack>
      <div className='income
      '>
     $ <CountUp start={0} duration={1}  end={6580000} />
    <div>total Sale</div>
    </div>
      
   
  </Card>
  
    </Stack>
        </Grid>
        
        <Grid item xs={11}  sm={8}>
        <Card sx={{ height:60 + "vh" }}>
    
    <CardContent>
    <Charts/>
    
    </CardContent>
   
  </Card>
        </Grid>

        <Grid item xs={11}  sm={4} >
        <Card sx={{ maxWidth: 345 ,height:60 + "vh" }} >
    
    <CardContent>
     
    


 <Typography sx={{
  textAlign:'center',
  fontWeight:10
 }} >Popular Projects</Typography>


    

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Project 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
           Hr management System
           
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Project 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
            TODO list

           </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Project 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
           video COnfrencing App
           </Typography>
        </AccordionDetails>
      </Accordion>
      </CardContent>
   
  </Card>
        </Grid>
      </Grid>

      
      
    </Box>
    </Box>
    </div>
   </>
  )
}

export default Dashboard