import { Routes , Route} from 'react-router-dom'
import Error from "./components/errorAnsForgetPassword/error";
import Client from "./components/AddClint/Client";
import Project from './components/AddProjects/Project';
import Login from "./components/Home/login";
import Forgetpassword from "./components/errorAnsForgetPassword/forgetpassword";
import Edit from "./components/Edit/Edit";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import Award from "../src/components/AddAward/Award";
import ShowAwards from "./components/ShowDetails/ShowAward";
import Dashboard from "./components/Deshboard/Dashboard";
import ShowProject from './components/ShowDetails/ShowProject';
import Myprofile from './components/myprofile/myprofile';
function App() {

  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (

   <>
  
    <Routes>
      <Route exact path="/" element={isLoggedIn == "true" ? <Dashboard/> : <Login/>} ></Route>
      <Route path="/reset-password/:id/:token" element={<Forgetpassword/>}></Route>
      
      <Route  path="/login" element={<Login/>} ></Route>
      <Route  path="/dashboard" element={<Dashboard/>}></Route>
      <Route  path="/dashboard/myprofile" element={<Myprofile/>}></Route>
      
      <Route  path="/dashboard/Client" element = {<Client/>}></Route>
      <Route  path="/dashboard/Project" element = {<Project/>}></Route>
      <Route  path="/dashboard/Award" element = {<Award/>}></Route>
      <Route  path="/dashboard/Client/Edit/:id" element = {<Edit/>}></Route>
      <Route  path="/dashboard/Client/Showdetails/:id" element = {<ShowDetails/>}></Route>
      <Route  path="/dashboard/Award/ShowAwards/:id" element = {<ShowAwards/>}></Route>
      <Route  path="/dashboard/Project/ShowProjects/:id" element = {<ShowProject/>}></Route>
    
    
     
      <Route path="*" element={<Error/>} ></Route>
     </Routes>
       
      
    

   </>  

  );
}

export default App;
