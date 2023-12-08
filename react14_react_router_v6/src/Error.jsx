import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (<>
        <h1>404 Oops, Page not found</h1>
        <NavLink to="/">Go back</NavLink>
    </>)
}

export default Error;