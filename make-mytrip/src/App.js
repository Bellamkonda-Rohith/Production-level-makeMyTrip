
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { Home } from './components/pages/Home';
import { Hotels } from './components/pages/Hotels';
import { Trains } from './components/pages/Trains';
import { Flights } from './components/pages/Flights';
import { Buses } from './components/pages/Buses';
import Header from './components/lauouts/Header';
import Layout from './components/lauouts/Layout';
import Cabs from './components/pages/Cabs';
import Holiday from './components/pages/Holiday';
import Currency from './components/pages/Currency';
import { useState } from 'react';
function App() {
  const [searchinput,setSearchInput]=useState({})
  return (
    <>
     
      <BrowserRouter>
     
      <Routes>
        
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
          <Route path="/flights" element={<Flights searchinput={searchinput} setSearchInput={setSearchInput}/>} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/trains" element={<Trains />} />
            <Route path="/buses" element={<Buses />} />
            <Route path='/cabs' element={<Cabs />} />
            <Route path='/holiday' element={<Holiday />} />
            <Route path='currency' element={<Currency/>}/>
            
            
            </Route>
          
          

       
      </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
