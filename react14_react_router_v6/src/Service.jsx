import React from "react";
import { useParams,  useLocation, useNavigate } from "react-router-dom";

const Service = (prop) => {
    const {id} = useParams();

    let location = useLocation();
    console.log(location);

    const navigate = useNavigate();
    setTimeout(() => {
        // (navigate("/session-timed-out"))
        (navigate("/"))
    }, 2000);
    

    return (<>
        <h1>Hello, Iam Service Page {id}</h1>
        <p>my current location is {location.pathname}</p>
    </>)
}

export default Service;