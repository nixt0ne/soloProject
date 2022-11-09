import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SgsList from './components/SgsList';
import SgsForm from './components/SgsForm';
import EditSgs from './components/EditSgs';
import OneSgs from './components/OneSgs';
import NavBar from './components/NavBar';
import React,{useState} from "react";
import {Navigate} from 'react-router-dom'
// import Main from './views/Main';


function App() {
  // const [list,setList] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          {/* <Route path='/' element={<Main/>}></Route> */}
          <Route path= '/'  element={<Navigate to= "/homeProfile"/>}></Route>
          <Route path='/homeProfile' element={<SgsList />}></Route>
          <Route path='/sgs/:id' element={<OneSgs/>}></Route>
          <Route path='/snowboardGearSelector' element={<SgsForm/>}></Route>
          <Route path='/sgs/:id/edit' element={<EditSgs/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
