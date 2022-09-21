import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/App.scss';
import { PrivateRoutes } from './components/privateRoutes';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

const App = () => {
  const [ID, setID] = useState('')
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes/>}/>
        <Route path='/' element={<Home ID={ID} />} />  
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login setID={setID} />} />   
      </Routes>
    </Router>
  );     
};

export default App;