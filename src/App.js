import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import User from './component/User';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Placeholder from './component/Placeholder';


function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
      
     <Route path="/" exact element={<User/>}/>
      <Route path="/place" exact element={<Placeholder/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
