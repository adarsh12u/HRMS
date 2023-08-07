import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DataTable from "react-data-table-component";
import { useEffect , useState} from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Clint_List = () => {
const navigate = useNavigate()
const [search , setSearch] = useState('')
 const [Cdata ,setCdata] = useState([])
 const [filterdata , setFilterdata] = useState('')


const clientdataload = () => {
  let token = localStorage.getItem("token")
 
  axios.get('http://localhost:4000/api/client/list',{headers:{
    "Content-type" : "application/json",
    Authorization: token,
   }}).then((res)=>{
   
   
        setCdata(res.data)
        setFilterdata(res.data)
       
   }).catch((err)=>{
        console.log("error occured")
   })
}


 useEffect(()=>{
      clientdataload();
 } , [] )
  
 useEffect(()=>{
  const result = Cdata.filter(data=>{
    return data.client_name.toLowerCase().match(search.toLocaleLowerCase())
  })
    setFilterdata(result)
 },[search])


 // for edit 

 const handleedit = async(id) =>{
  toast("Wow so easy!")
  navigate(`/dashboard/Client/Edit/${id}`)
 }


//  for show details
const Show = async(id) =>{
   
  navigate(`/dashboard/Client/Showdetails/${id}`)

  // await axios
  // .get(
  //   `http://localhost:4000/api/client/datail/${id}`,

  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // )


}

 //  for delete user
 const handledelete = async(id) =>{
  const token = localStorage.getItem('token');
  await axios.delete(`http://localhost:4000/api/client/delete/${id}`,{headers:{
    "Content-type" : "application/json",
    Authorization: token
  
   }})

   await clientdataload();
   
 } 
 
 const coloumn = [
    {
      name: "Name",
      selector: (row) => row.client_name,
      sortable:true
    },
    {
      name: "Email",
      selector: (row) => row.client_email,
    },
    {
      name: "Phone NO",
      selector: (row) => row.client_phone,
    },
    {
      name: "City",
      selector: (row) => row.client_city,
    },
    {
      name: "State",
      selector: (row) => row.client_state,
    },
    {
      name: "Date",
      // default:Date.now(),
      selector: (row) => row.client_date,
      sortable:true
    },
    {
      name: "Salary",
      selector: (row) => row.client_Salary,
    },
    {
      name: "Other_info",
      selector: (row) => row.client_other_info,
    },
   
    {
      name: "Client_id",
      selector: (row) => row._id,
      
    },

    {
      name: "Show Client",
      cell: (row) => (
        <IconButton onClick={() =>Show(row._id)}
          sx={{
            color: "#07af2b",
          }}
          aria-label="add to shopping cart"
        >
          <RemoveRedEyeIcon />
        </IconButton>
      ),
    },
    {
      name: "edit",
      cell: (row) => (<>        <IconButton onClick={() =>handleedit(row._id)}
          sx={{
            color: "#07af2b",
          }}
          aria-label="add to shopping cart"
        >
          <EditOutlinedIcon />
          
        </IconButton>
        <ToastContainer />
        </>

      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <IconButton onClick={() =>handledelete(row._id)}
          sx={{
            color: "#af0707",
          }}
          aria-label="add to shopping cart"
        >
          <DeleteOutlineOutlinedIcon  />
        </IconButton>
      ),
    },
  ];

  return (
    <Box component={"div"}>
      <DataTable
        title={"Clint List"}
        columns={coloumn}
        data={filterdata}
        pagination
        
        fixedHeader
        fixedHeaderScrollHeight="300px"
        highlightOnHover
         subHeader
       subHeaderComponent = {
        <TextField label="Search" variant="outlined" size="small" value={search} onChange={(e)=>setSearch(e.target.value)}/>
       }
       subHeaderAlign="left"
      />
    </Box>
  );
};
export default Clint_List;
