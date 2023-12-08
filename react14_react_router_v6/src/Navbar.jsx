import React from "react";
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
    return (<>
        <h3>anchor tag</h3>
        <a href="/">About Us</a>
        <a href="/contact">Contact</a><br/><br/>

        <h3>with router Link</h3>
        <Link exact to ='/' >About Us</Link><br/>
        <Link exact to ='/contact'>Contact</Link><br/><br/><br/>

        {/* Nav of Nesting */}
        <Link exact to ='/service'>Service</Link><br/>
        <Link exact to ='/service/1'>Service1</Link><br/>
        <Link exact to ='/service/2'>Service2</Link><br/>
        <br/><br/>
        
        <h3>applying styling</h3>
        <NavLink exact to ='/' className={({ isActive }) =>
     isActive ? "active" : ""
  }>About Us</NavLink>
        <NavLink exact to ='/contact' className={({ isActive }) =>
     isActive ? "active" : ""
  }>Contact</NavLink>
    </>)
}

export default Navbar;