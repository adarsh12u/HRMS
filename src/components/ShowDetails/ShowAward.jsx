import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HR_Dashboard from '../Home/HR_Dashboard';
import Slidebar from '../Home/Slidebar';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import { styled } from 'styled-components';
const Div = styled(Box)`
border: 20px solid #3987e0;
  padding:50px
`
const Other = styled(Box)`


color: rgb(17, 17, 17);
font-size: 30px;

margin-top: 10px;  max-width: 400px;
`

const Name  = styled(Box)`


color: rgb(17, 17, 17);
font-size: 20px;

margin-top: 10px;     max-width: 400px;

`

const ShowAwards = () => {
   
const navigate = useNavigate();
   const[Award_name, setName] = React.useState("");
  const [Award_item, setItem] = React.useState("");
  const [Award_description, setDescription] = React.useState("");
  const [Award_client_name, setClientName] = React.useState("");
  const [Award_date, setDate] = React.useState("");
  const [Awarded_by, setAwardedBy] = React.useState("");

  


  const { id } = useParams();

  useEffect(() => {let token = localStorage.getItem("token")

    axios
      .get(
        `http://localhost:4000/api/award/datails/${id}`,

        {
          headers: {
            "Content-Type": "application/json",  Authorization: token,
          },
        }
      )
      .then((res) => {
        setName(res.data.Award_name);
        setItem(res.data.Award_item);
        setDescription(res.data.Award_description);
        setClientName(res.data.Award_client_name);
        setDate(res.data.Award_date);
        setAwardedBy(res.data.Awarded_by);
      
      })
      .catch((err) => {
        console.log("error aai gai");
        console.log(err);
      });
  }, []);



  return (
    <>
    <Box component={"div"} sx={{}}>
      <HR_Dashboard />
      <Box sx={{ display: "flex" }}>
        <Slidebar />
        <Div component={'div'} ml={{xs:5  , sm:40}}>
             <Box component={"div"} >
           
            <Button onClick={() =>navigate("/dashboard/Award")} variant="contained">
              Back
            </Button>
         
          </Box>
         
              <Other component={'div'}  > Award_name :  {Award_name} </Other>
              <Name component={'div'}  >Award_item :  {Award_item} </Name>
              <Name component={'div'}  >Award_description :  {Award_description} </Name>
              <Name component={'div'}  >client_name :  {Award_client_name} </Name>
              <Name component={'div'}  >Award_date :  {Award_date} </Name>
              
              <Name component={'div'}  >Awarded_by :  {Awarded_by} </Name>
             
             

        </Div>
      </Box>
    </Box>
   



    </>
  )
}

export default ShowAwards