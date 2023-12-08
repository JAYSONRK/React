import React, { useContext } from "react";
import { Firstname, LastName } from "./App"; 

// useContext method

const CompB = () => {
 const fname = useContext(Firstname);
 const lname =  useContext(LastName);
 return (<>
    <h1>My Name is {fname} {lname}</h1>
 </>)
}

export default CompB;
