import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DataTable from "react-data-table-component";
import { useEffect , useState} from "react";
import axios from "axios";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {  useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import 'react-toastify/dist/ReactToastify.css';

const Project_List = () => {
const navigate = useNavigate()
const [search , setSearch] = useState('')
 const [Cdata ,setCdata] = useState([])
 const [filterdata , setFilterdata] = useState('')

 let token = localStorage.getItem("token");
 
const Projectdataload = () => {
  axios.get('http://localhost:4000/api/project/list',{headers:{
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
  Projectdataload();
 } , [] )
  
 useEffect(()=>{
  const result = Cdata.filter(data=>{
    return data.Project_name.toLowerCase().match(search.toLocaleLowerCase())
  })
    setFilterdata(result)
 },[search])


const Show = (id) =>{
    
      navigate(`/dashboard/Project/ShowProjects/${id}`)
   
}
const handledelete = async(id) =>{
  await axios.delete(`http://localhost:4000/api/project/delete/${id}`,{headers:{
    "Content-type" : "application/json",
    Authorization: token,
   }})

   await Projectdataload();
   
 } 


 
 const coloumn = [
  {
    name: "Project ID",
    selector: (row) => row.Project_id,
    sortable:true
  },
    {
      name: "Project Name",
      selector: (row) => row.Project_name,
      sortable:true
    },
    {
      name: "Description",
      selector: (row) => row.Project_description,
    },
    {
      name: "Date",
      selector: (row) => row.Project_date,
      sortable:true
    },
    {
      name: "Completion date",
      selector: (row) => row.Project_completion_date,
      sortable:true
    },
    {
      name: " Manager",
      selector: (row) => row.Project_manager,
    },
    {
      name: "Country",
      // default:Date.now(),
      selector: (row) => row.Project_country,
      
    },
    {
      name: "Show Project",
      cell: (row) => (
        <IconButton onClick={() =>Show(row.Project_id)}
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
      name: "Delete Project",
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
        title={"Project List"}
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
export default Project_List;
