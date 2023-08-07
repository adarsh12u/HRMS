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
const Add_Projects = () => {
  const [err, setErr] = React.useState("");
  const [Projectdata, setProjectdata] = React.useState({
    Project_name: "",
    Project_id: "",
    Project_description: "",
    Project_date: "",
    Project_completion_date: "",
    Project_country: "",
   Project_manager: "",
    
    
  });
 
  let token = localStorage.getItem("token");


  const handleInput = (e) => {
    setProjectdata({ ...Projectdata, [e.target.name]: e.target.value });
  };

  const addProject = async () => {
    const data = await axios
      .post(
        "http://localhost:4000/api/project/create",
        { Projectdata },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((res) => {
        toast.success('Project Add Successfully', {
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
        setProjectdata(  {     Project_name: "",
        Project_id: "",
        Project_description: "",
        Project_date: "",
        Project_completion_date: "",
        Project_country: "",
       Project_manager: "",
        
        
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
        <Button onClick={addProject} variant="contained" endIcon={<AddIcon />}>
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
          name="Project_name"
          value={Projectdata.Project_name}
          type="text"
          label="Project_name"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Project_id"
          value={Projectdata.Project_id}
          type="number"
          label="Project_id"
          variant="outlined"
        />
       
   
       
     
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Project_date"
          value={Projectdata.Project_date}
          type="date"
          label="Project_date"
          variant="outlined"
         
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Project_completion_date"
          value={Projectdata.Project_completion_date}
          type="date"
          label="Project_completion_date"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Project_country"
          value={Projectdata.Project_country}
          type="text"
          label="Project_country"
          variant="outlined"
        />
    

<TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Project_manager"
          value={Projectdata.Project_manager}
          type="text"
          label="Project_manager"
          variant="outlined"
        
        />
          <TextField
          required
          id="outlined-required"
          onChange={(e) => handleInput(e)}
          name="Project_description"
          value={Projectdata.Project_description}
          type="text"
          label="Project_description"
          variant="outlined"
          multiline
          rows={4}
        />
      </Box>
    </Box>
  );
};
export default Add_Projects;
