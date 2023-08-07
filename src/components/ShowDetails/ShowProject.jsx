import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HR_Dashboard from '../Home/HR_Dashboard';
import Slidebar from '../Home/Slidebar';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import { styled } from 'styled-components';

const Other = styled(Box)`


color: rgb(17, 17, 17);
font-size: 30px;

margin-top: 10px;  max-width: 400px;
`
const Div = styled(Box)`
border: 20px solid #3987e0;
  padding:50px
`
const Name  = styled(Box)`


color: rgb(17, 17, 17);
font-size: 20px;

margin-top: 10px;     max-width: 400px;

`

const ShowProject = () => {
   
const navigate = useNavigate();

   const[Project_name, setName] = React.useState("");
  const [Project_id, setId] = React.useState("");
  const [Project_description, setDescription] = React.useState("");
  const [Project_date, setDate] = React.useState("");
  const [Project_completion_date, setCDate] = React.useState("");
  const [Project_country, setProejctCountry] = React.useState("");
  const [Project_manager, setProejctTeam] = React.useState("");

  


  const { id } = useParams();

  useEffect(() => {let token = localStorage.getItem("token")
  
    axios
      .get(
        `http://localhost:4000/api/project/datails/${id}`,

        {
          headers: {
            "Content-Type": "application/json",Authorization: token,
          },
        }
      )
      .then((res) => {
        setName(res.data.Project_name);
        setId(res.data.Project_id);
        setDescription(res.data.Project_description);
        setProejctCountry(res.data.Project_country);
        setDate(res.data.Project_date);
        setCDate(res.data.Project_completion_date);
        setProejctTeam(res.data.Project_manager)
      })
      .catch((err) => {
       
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
           
            <Button onClick={() =>navigate("/dashboard/project")} variant="contained">
              Back
            </Button>
            
          </Box>
              <Other component={'div'}  > Project_name :  {Project_name} </Other>
              <Name component={'div'}  >Project_manager :  {Project_manager} </Name>

              <Name component={'div'}  >Project_country :  {Project_country} </Name>
              <Name component={'div'}  >Project_date :  {Project_date} </Name>
              <Name component={'div'}  >Project_completion_date :  {Project_completion_date} </Name>
              
              <Name component={'div'}  >Project_description :  {Project_description} </Name>
             
             

        </Div>
      </Box>
    </Box>
   



    </>
  )
}

export default ShowProject