import React, { useEffect, useState } from "react";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  width: 300px;

  margin: auto;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px 5px rgb(0 0 0/0.2);
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;

  & > div,
  & button,
  & > p {
    margin-top: 15px;
  }
`;

const H1 = styled("h1")({
  width: 100,
  margin: "auto",
  display: "flex",
  fontFamily: "cursive",
  color: "#315db7",
  paddingTop: 40,
});

const LOGINBUTTON = styled(Button)`
  text-transform: none;
`;

const LOGINBUTTONS = styled(Button)`
  text-transform: none;

  background: #fff;
  color: #2874f0;
  height: 40px;
  bordre-radius: 2px;
  box-shadow: 1px 2px 4px 1px rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  color: #787b7e;
  margin-top: 6px;
`;
const Texts = styled(Typography)`
  color: #891303;
  margin-top: 6px;
`;

const SIGNINBUTTON = styled(Button)`
  text-transform: none;
`;

const Login = () => {
  // useEffect(()=>{
  //   window.localStorage.setItem("loggedIn", true);

  // },[])
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const [account, setAccount] = useState("login");

  const [signup, setSignup] = useState({
    HR_Firstname: "",
    HR_Lastname: "",
    HR_email: "",
    HR_password: "",
    HR_Confirmpassword: "",
    mobile: "",
  });

  const [login, setLogin] = useState({
    HR_email: "",
    HR_password: "",
  });

  const postLogin = async (event) => {
    event.preventDefault();

    const { HR_email, HR_password } = login;
    if (!HR_email || !HR_password) {
      setErr("BOTH FIELD ARE REQUIRED")
    }
    if (HR_email && HR_password) {
      axios
        .post(
          "http://localhost:4000/api/login",
          { login },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
        
          window.localStorage.setItem("token", res.data.response.data.token);
          window.localStorage.setItem("loggedIn", true);
          // console.log(res.data.response.data.token)

          navigate("/dashboard");
        })
        .catch((err) => {
        
          
   console.log(err)
            setErr(err.response.data.Error);
          }
        );
    
    }
  };

  const postdata = async (event) => {
    const {
      HR_Firstname,
      HR_Lastname,
      HR_email,
      HR_password,
      HR_Confirmpassword,
      mobile,
    } = signup;
    if (
      HR_Firstname &&
      HR_Lastname &&
      HR_email &&
      HR_password &&
      HR_Confirmpassword &&
      mobile
    ) {
      
      try {
        console.log(signup);
        await axios.post(
          "http://localhost:4000/api/register",
          { signup },
          { headers: { "Content-Type": "application/json" } }
        );
       
        setAccount("login");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("not posted");
    }
  };

  const oninputchange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const oninputchangel = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const msg = async (req, res) => {
    // alert("plZ check your email to reset your password");

     axios.post(
      "http://localhost:4000/api/forget-password",
      { login },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res)=>
    {
      setErr("");
        toast.info('Plese Check Your Mail To Rest Password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    }).catch((err)=>{
      console.log(err)
     
    })
   
  };

  return (
    <>
      <Component
        component="form"
        variant="div"
        sx={{
          width: {
            xs: 250,
            sm: 300,
            md: 430,
          },
          marginLeft: {
            xm: 60,
          },
          margin: {
            xm: "auto",
          },
          marginTop: {
            xs: 5,
            sm: 15,
            md: 15,
          },
        }}
      >
        {account === "login" ? (
          <Box>
            <H1
              sx={{
                fontSize: {
                  xs: 25,
                  sm: 40,
                },
              }}
            >
              Login
            </H1>
            <Box sx={{}}>
              {" "}
              <Texts
                style={{
                  textAlign: "center",
                }}
              >
                {err}
              </Texts>{" "}
            </Box>
            <Wrapper>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <MailIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="standard-basic"
                  label="Email"
                  name="HR_email"
                  variant="standard"
                  value={login.HR_email}
                  onChange={(e) => oninputchangel(e)}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="standard-basic"
                  label="Password"
                  name="HR_password"
                  variant="standard"
                  value={login.HR_password}
                  onChange={(e) => oninputchangel(e)}
                />
              </Box>

              <LOGINBUTTON
                variant="contained"
                endIcon={<LoginSharpIcon />}
                onClick={postLogin}
              >
                Login
              </LOGINBUTTON>
             

              <Button variant="text" size="small" onClick={msg}>
                Forget Password ?
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
              <Text style={{ textAlign: "center" }}> OR </Text>

              <LOGINBUTTONS variant="text" onClick={() => setAccount("signup")}>
                create an Account
              </LOGINBUTTONS>
            </Wrapper>
          </Box>
        ) : (
          <Box>
            <H1
              sx={{
                fontSize: {
                  xs: 25,
                  sm: 40,
                },
              }}
            >
              SignUp
            </H1>

            <Wrapper>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <PersonIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="standard-basic"
                  label="FirstName"
                  name="HR_Firstname"
                  variant="standard"
                  onChange={(e) => oninputchange(e)}
                  value={signup.HR_Firstname}
                  autoComplete="none"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <PersonIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="standard-basic"
                  label="LastName"
                  name="HR_Lastname"
                  variant="standard"
                  onChange={(e) => oninputchange(e)}
                  value={signup.HR_Lastname}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <MailIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="standard-basic"
                  label="Email"
                  name="HR_email"
                  variant="standard"
                  value={signup.HR_email}
                  onChange={(e) => oninputchange(e)}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="standard-basic"
                  label="Password"
                  name="HR_password"
                  variant="standard"
                  value={signup.HR_password}
                  onChange={(e) => oninputchange(e)}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="standard-basic"
                  label="ConfirmPassword"
                  name="HR_Confirmpassword"
                  variant="standard"
                  value={signup.HR_Confirmpassword}
                  onChange={(e) => oninputchange(e)}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <CallIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="standard-basic"
                  label="Number"
                  name="mobile"
                  variant="standard"
                  value={signup.mobile}
                  onChange={(e) => oninputchange(e)}
                />
              </Box>{" "}
              <SIGNINBUTTON
                variant="contained"
                endIcon={<LoginSharpIcon />}
                onClick={postdata}
              >
                Signup
              </SIGNINBUTTON>
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
              <Text variant="" style={{ textAlign: "center" }}>
                {" "}
                OR{" "}
              </Text>
              <LOGINBUTTONS variant="text" onClick={() => setAccount("login")}>
                Already Have an Account
              </LOGINBUTTONS>
            </Wrapper>
          </Box>
        )}
      </Component>
    </>
  );
};
export default Login;
