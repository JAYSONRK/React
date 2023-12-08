import React from 'react';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';
import {Routes, Route, redirect} from "react-router-dom";


const App = () => {
  return (<>
    {/* <About/>
    <Contact/> */}
    <Navbar/>
    <Routes>
      <Route path='/'  element={<About/>}/>
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='*' element={<Error />} /> */}
       redirect("/")
      
      {/* Nesting */}
      <Route path='/service/' element={<Service/>}>
        <Route path='/service/:id' element={<Service/>}/>
        <Route path='/service/:id' element={<Service/>}/>
      </Route>
    </Routes>
  </>)
}

export default App;
