import React from "react";
import { Firstname} from "./App";

// Context API method

const CompC = () => {
    return(<>
        <Firstname.Consumer>{(fname) => {
            return <h1>My name is {fname}</h1>
        }}</Firstname.Consumer>
    </>)
}

export default CompC;