import React, { useEffect, useState } from "react";
import { Box, Button, TextField, styled } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

const H1 = styled("h3")({
  width: 200,
  margin: "auto",
  display: "flex",
  fontFamily: "cursive",
  color: "#315db7",
  paddingTop: 40,
});

const LOGINBUTTON = styled(Button)`
  text-transform: none;
`;

const ForgetPassword = () => {


  const navigate = useNavigate();
  const { id, token } = useParams();
  const [err, setErr] = useState("");

  const [foret_password, setForgetPassword] = useState({
    password: "",
    cpassword: "",
  });
  const setPassword = (e) => {
    setForgetPassword({ ...foret_password, [e.target.name]: e.target.value });
  };

  const postdata = async (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:4000/api/reset-password/${id}/${token}`,
        { foret_password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {})
      .catch((err) => {
       console.log(err)
       setErr(err.response.data.Error);
      });
      alert("reset password succesfully");

      navigate("/")
    console.log("i am come");
  };

  return (
    <>
      <form method="POST">
        <Component
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
          <Box>
            <H1
              sx={{
                fontSize: {
                  xs: 25,
                  sm: 25,
                },
              }}
            >
              Reset-Password
            </H1>
            <Box textAlign={"center"}>{err}</Box>
            <Wrapper>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="standard-basic"
                  label="Passsword"
                  name="password"
                  variant="standard"
                  value={foret_password.password}
                  onChange={(e) => setPassword(e)}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ mr: 1, my: 0.5 }} />
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="standard-basic"
                  label="C-Password"
                  name="cpassword"
                  variant="standard"
                  value={foret_password.cpassword}
                  onChange={(e) => setPassword(e)}
                />
              </Box>

              <LOGINBUTTON variant="contained" onClick={postdata}>
                reset-password
              </LOGINBUTTON>
            </Wrapper>
          </Box>
        </Component>
      </form>
    </>
  );
};
export default ForgetPassword;
