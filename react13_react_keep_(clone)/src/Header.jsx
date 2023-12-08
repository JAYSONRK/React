import React from "react";
import Logo from "./JRK logo.jpg";


const Header = () => {
     return (<>
        <div className="bg-danger header">
            <div className="logo">
             <img src={Logo} alt="logo"/>
            </div>
            <div className="header">
                <h1 className="text-light align-content-center h-auto">Jayson keep note</h1>
            </div>  
        </div>
     </>)                  
}

export default Header;