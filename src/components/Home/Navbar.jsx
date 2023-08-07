import { Avatar } from "@mui/material";
import { useAppStore } from "../../appstore";
import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Tools = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});


// my profile


// logout hr
const logout = () => {
  window.localStorage.clear();
  window.location.href = "/";
};

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  // my profile
  const  account = () =>{
  
    navigate('/dashboard/myprofile');
  }
  
  const updateOpen = useAppStore((state) => state.updateOpen);
  const dopen = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Tools>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => updateOpen(!dopen)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              mt={1}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Management
            </Typography>
          </Box>
          <Box onClick={() => setOpen(true)}>
            {/* <Avatar
              sx={{
                width: {
                  xs: 30,
                  sm: 35,
                },
                height: {
                  xs: 30,
                  sm: 35,
                },
              }}
            /> */}
            < AccountCircleIcon  sx={{
                width: {
                  xs: 30,
                  sm: 35,
                },
                height: {
                  xs: 30,
                  sm: 35,
                },
              }}/>
          </Box>
        </Tools>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          sx={{
            width: { xs: 140, sm: 150 },
          }}
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem  onClick={account} >My account</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
};
export default Navbar;
