import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { styled } from "styled-components";
import { Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Texts = styled(Typography)`
  color: #891303;
  margin-top: 6px;
`;
const Add_Clients = () => {
  const [err, setErr] = React.useState("");
  const [clientData, setClientData] = React.useState({
    client_name: "",
    client_email: "",
    client_Salary: "",
    client_city: "",
    client_state: "",
    client_address: "",
    client_phone: "",
    client_other_info: "",
    client_date: "",
    
  });

  const handleInput = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };
 
  const addClient = async () => {
    
    let token = localStorage.getItem("token");
    const data = await axios
      .post(
        "http://localhost:4000/api/client/create",
        { clientData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((res) => {
        toast.success('Client Add Successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        // alert("client Add successfully");
        setErr('');
        setClientData(  {
          client_name: "",
        client_email: "",
        client_Salary: "",
        client_city: "",
        client_state: "",
        client_address: "",
        client_phone: "",
        client_other_info: "",
        client_date: "",
      });
      
      })
      .catch((err) => {
        if (err) {
          setErr(err.response.data.error);
        }
      });
  };

  return (
    //

    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: { xs: "25ch", sm: "60ch" } },
      }}
    >
      <Texts
        component={"div"}
        style={{
          textAlign: "center",
        }}
      >
        {err}
      </Texts>{" "}
      <Box component={"div"}>
        <Button onClick={addClient} variant="contained" endIcon={<AddIcon />}>
          Add
        </Button>
        <ToastContainer
position="top-right"
autoClose={5000}
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
      <Box component={"div"}>
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="client_name"
          value={clientData.client_name}
          type="text"
          label="client_name"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="client_email"
          value={clientData.client_email}
          type="email"
          label="client_email"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="client_Salary"
          value={clientData.client_Salary}
          type="number"
          label="client_Salary"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="client_city"
          value={clientData.client_city}
          type="text"
          label="client_city"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="client_state"
          value={clientData.client_state}
          type="text"
          label="client_state"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="client_phone"
          value={clientData.client_phone}
          type="number"
          label="client_phone"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="client_other_info"
          value={clientData.client_other_info}
          type="text"
          label="client_other_info"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="client_date"
          value={clientData.client_date}
          type="date"
          label="client_date"
          variant="outlined"
        />
     
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="client_address"
          value={clientData.client_address}
          type="text"
          label="client_address"
          variant="outlined"
          multiline
          rows={4}
        />
      </Box>
    </Box>
  );
};
export default Add_Clients;
