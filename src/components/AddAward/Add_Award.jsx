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
const Add_Award = () => {
  const [err, setErr] = React.useState("");
  const [awarddata, setAwarddata] = React.useState({
    Award_name: "",
    Award_item: "",
    Award_description: "",
    Award_date: "",
    Awarded_by: "",
    Award_client_id: "",
   Award_client_name: "",
    
    
  });
 


  const handleInput = (e) => {
    setAwarddata({ ...awarddata, [e.target.name]: e.target.value });
  };

  const addAward = async () => {
    let token = localStorage.getItem("token")
    const data = await axios
      .post(
        "http://localhost:4000/api/award/create",
        { awarddata },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:token
          },
        }
      )
      .then((res) => {
        toast.success('Award Add Successfully', {
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
        setAwarddata(  {    Award_name: "",
        Award_item: "",
        Award_description: "",
        Award_date: "",
        Awarded_by: "",
        Award_client_id: "",
       Award_client_name: "",
        
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
        <Button onClick={addAward} variant="contained" endIcon={<AddIcon />}>
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
          name="Award_name"
          value={awarddata.Award_name}
          type="text"
          label="Award_name"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Award_item"
          value={awarddata.Award_item}
          type="text"
          label="Award_item"
          variant="outlined"
        />
       
     <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Award_client_name"
          value={awarddata.Award_client_name}
          type="text"
          label="client_name"
          variant="outlined"
        
        />
       
     
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Award_client_id"
          value={awarddata.Award_client_id}
          type="text"
          label="client_id"
          variant="outlined"
         
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Award_date"
          value={awarddata.Award_date}
          type="date"
          label="Award_date"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Awarded_by"
          value={awarddata.Awarded_by}
          type="text"
          label="Awarded_by"
          variant="outlined"
        />
    

<TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Award_description"
          value={awarddata.Award_description}
          type="text"
          label="Award_description"
          variant="outlined"
          multiline
          rows={4}
        />
      </Box>
    </Box>
  );
};
export default Add_Award;
