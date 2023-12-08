import React from "react";
import CompA from "./ComponentA";
import CompC from "./ComponentC";

const Firstname =  createContext();
const LastName = createContext();

const App = () => {
  return (<>
      <Firstname.Provider value={'jayson'}><LastName.Provider value={'robert'}><CompA/></LastName.Provider></Firstname.Provider>
    </>);
}

export default App;
export {Firstname, LastName};
