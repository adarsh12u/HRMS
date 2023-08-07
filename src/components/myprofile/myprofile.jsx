import React, { useEffect, useState } from 'react'
import HR_Dashboard from '../Home/HR_Dashboard'
import Slidebar from '../Home/Slidebar'
import { Box } from '@mui/material'
import { styled } from 'styled-components'
import axios from 'axios'

const Div = styled(Box)`
border: 20px solid #3987e0;
  padding : 50px;
  margin:auto

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
const Myprofile = () => {
  const [FirstName  ,setFName]  =useState('');
  const [LastName ,setLName]  =useState('');
  const [EmailID ,setEmail]  =useState('');
  
  const [MobileNumber ,setMobilenumber]  =useState('');
  const password = (password)=>{
        
    
      
  }

  useEffect(()=>{
    const token = localStorage.getItem('token');
    axios.get('http://localhost:4000/api/profile',{headers:{
      "Content-Type":"application:json",
      Authorization:token
    }}).then((res)=>{
 
      setFName(res.data.HR_Firstname)

      setLName(res.data.HR_Lastname)
      setEmail(res.data.HR_email)
    
      setMobilenumber(res.data.mobile)

    }).catch((err)=>{
         console.log(err)
    })
  },[])
  return (
   <>
     <Box
      component={"div"}
      sx={{
       
      }}
    >
      <HR_Dashboard/>
      <Box sx={{ display: "flex" }}>
        <Slidebar />
        <Div> 
      <Other component={'div'}  >First Name :  {FirstName} </Other>
              <Other component={'div'}  >Last Name :  {LastName} </Other>

              <Name component={'div'}  >Email ID:  {EmailID} </Name>
             
              <Name component={'div'}  >Mobile Number :  {MobileNumber} </Name> 
              
        </Div>
        </Box>
        </Box>
   </>
  )
}

export default Myprofile