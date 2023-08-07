import React, { useEffect } from "react";
import HR_Dashboard from "../Home/HR_Dashboard";
import { Box, Button, TextField, Typography } from "@mui/material";
import Slidebar from "../Home/Slidebar";
import styled from "@emotion/styled";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Text = styled(Typography)`
  color: rgb(17, 17, 17);
  font-size: 25px;

  margin-top: 6px;
`;

const Edit = () => {
  const navigate = useNavigate() 
  const [err, setErr] = React.useState("");

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

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/client/datail/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
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

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSalary = (e) => {
    setSalary(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleOther = (e) => {
    setOtherInfo(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const edit = async (id) => {

   

    const res = await axios.patch(
      `http://localhost:4000/api/client/edit/${id}`,
      {client_name,
        client_email, 
        client_Salary, 
        client_city, 
        client_state,
        client_address, 
        client_phone,
        client_other_info,
        client_date}
      ,{
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setName('')
    setEmail('')
    setSalary('')
    setCity('')
    setState('')
    setAddress('')
    setPhone('')
    setOtherInfo('')
     setDate('')

     toast.success('Client Edit Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  return (
<>
    <Box component={"div"} sx={{}}>
      <HR_Dashboard />
      <Box sx={{ display: "flex" }}>
        <Slidebar />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: { xs: "25ch", sm: "60ch" } },
          }}
        >
          <Text style={{ textAlign: "center" }}>Edit Client</Text>
         <Box component={"div"} ml={12} display={"flex"} justifyContent={"space-between"} mr={12}>
            
          <Box component={"div"} >
            <Button onClick={() => edit(id)} variant="contained">
              Edit
            </Button>
            <ToastContainer
position="top-right"
autoClose={300}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
           
          </Box>
          <Box component={"div"} >
           
            <Button  onClick={() =>navigate("/dashboard/Client")} variant="contained">
              Back
            </Button>
          </Box>
          </Box>
          <Box component={"div"} ml={10}>
            <TextField
              required
              id="outlined-required"
              onChange={(e) => handleName(e)}
              name="client_name"
              value={client_name
                }
              type="text"
              label="client_name"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              onChange={(e) => handleEmail(e)}
              name="client_email"
              value={
                client_email
                }
              type="email"
              label="client_email"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              onChange={(e) => handleSalary(e)}
              name="client_Salary"
              value={
                client_Salary}
              type="number"
              label="client_Salary"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              onChange={(e) => handleCity(e)}
              name="client_city"
              value={ 
                client_city}
              type="text"
              label="client_city"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              onChange={(e) => handleState(e)}
              name="client_state"
              value={
                client_state}
              type="text"
              label="client_state"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              onChange={(e) => handlePhone(e)}
              name="client_phone"
              value={ 
                client_phone}
              type="number"
              label="client_phone"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              onChange={(e) => handleOther(e)}
              name="client_other_info"
              value={
                client_other_info}
              type="text"
              label="client_other_info"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              onChange={(e) => handleDate(e)}
              name="client_date"
              value={
                client_date}
              type="date"
              label="client_date"
              variant="outlined"
            />

            <TextField
              required
              id="outlined-required"
              onChange={(e) => handleAddress(e)}
              name="client_address"
              value={
                client_address}
              type="text"
              label="client_address"
              variant="outlined"
              multiline
              rows={4}
            />
          </Box>
        </Box>
      </Box>
    </Box>



    </>

  );
};
export default Edit;
