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

const Name  = styled(Box)`


color: rgb(17, 17, 17);
font-size: 20px;

margin-top: 10px;     max-width: 400px;

`
const Div = styled(Box)`
border: 20px solid #3987e0;
  padding:50px
`

const ShowDetails = () => {

const navigate = useNavigate();
    const [client_name, setName] = React.useState("");
  const [client_email, setEmail] = React.useState("");
  const [client_Salary, setSalary] = React.useState("");
  const [client_city, setCity] = React.useState("");
  const [client_state, setState] = React.useState("");
  const [client_address, setAddress] = React.useState("");
  const [client_phone, setPhone] = React.useState("");
  const [client_other_info, setOtherInfo] = React.useState("");
  const [client_date, setDate] = React.useState("");

  const { id } = useParams();

  useEffect(() => {let token = localStorage.getItem("token")
  
    axios
      .get(
        `http://localhost:4000/api/client/datail/${id}`,

        {
          headers: {
            "Content-Type": "application/json",Authorization: token,
          },
        }
      )
      .then((res) => {
        setName(res.data.client_name);
        setEmail(res.data.client_email);
        setSalary(res.data.client_Salary);
        setCity(res.data.client_city);
        setState(res.data.client_state);
        setAddress(res.data.client_address);
        setPhone(res.data.client_phone);
        setOtherInfo(res.data.client_other_info);
        setDate(res.data.client_date);
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
           
            <Button onClick={() =>navigate("/dashboard/Client")} variant="contained">
              Back
            </Button>
          </Box>
              <Other component={'div'}  >Name :  {client_name} </Other>
              <Name component={'div'}  >Email :  {client_email} </Name>
              <Name component={'div'}  >Salary :  {client_Salary} </Name>
              <Name component={'div'}  >City :  {client_city} </Name>
              <Name component={'div'}  >State :  {client_state} </Name>
              
              <Name component={'div'}  >Address :  {client_address} </Name>
             
              <Name component={'div'}  >Phone :  {client_phone} </Name>
              <Name component={'div'}  >Other_info :  {client_other_info} </Name>
              <Name component={'div'}  >Date :  {client_date} </Name>

        </Div>
      </Box>
    </Box>
   



    </>
  )
}

export default ShowDetails