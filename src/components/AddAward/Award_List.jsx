import { Box, TextField } from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DataTable from "react-data-table-component";
import { useEffect , useState} from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import 'react-toastify/dist/ReactToastify.css';

const Award_List = () => {
const navigate = useNavigate()
const [search , setSearch] = useState('')
 const [Cdata ,setCdata] = useState([])
 const [filterdata , setFilterdata] = useState('')


const Awarddataload = () => {
  let token = localStorage.getItem("token")

  axios.get('http://localhost:4000/api/award/list',{headers:{
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
      Awarddataload();
 } , [] )
  
 useEffect(()=>{
  const result = Cdata.filter(data=>{
    return data.Award_name.toLowerCase().match(search.toLocaleLowerCase())
  })
    setFilterdata(result)
 },[search])


const Show = (id) =>{
    
      navigate(`/dashboard/Award/ShowAwards/${id}`)
   
}

 
 const coloumn = [
  {
    name: "Award ID",
    selector: (row) => row.Award_client_id,
    sortable:true
  },
    {
      name: "Award Name",
      selector: (row) => row.Award_name,
      sortable:true
    },
    {
      name: "Award item",
      selector: (row) => row.Award_item,
    },
    {
      name: "Description",
      selector: (row) => row.Award_description,
    },
    {
      name: " Award by",
      selector: (row) => row.Awarded_by,
    },
    {
      name: "Client name",
      selector: (row) => row.Award_client_name,
    },
    {
      name: "Award date",
      // default:Date.now(),
      selector: (row) => row.Award_date,
      sortable:true
    },
    {
      name: "Show Award",
      cell: (row) => (
        <IconButton onClick={() =>Show(row.Award_client_id)}
          sx={{
            color: "#07af2b",
          }}
          aria-label="add to shopping cart"
        >
          <RemoveRedEyeIcon />
        </IconButton>
      ),
    },
  
  ];

  return (
    <Box component={"div"}>
      <DataTable
        title={"Award List"}
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
export default Award_List;
