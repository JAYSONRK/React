import React from "react";
import Card from "./Card";
import Adata from "./Adata";
import Bdata from "./Bdata";

const age = 50;
console.log(age);
const shows = (age) => {
if (age <= 13) {
  return Bdata;
} else {
  return  Adata;
}
// age <= 13 ? Bdata: Adata dont work
}
const App = () => {
return (
  <>
  {shows().map((val) => {
    return (
      <Card
        key = {val.id}
        imgsrc = {val.imgsrc}
        title = {val.title}
        sname = {val.sname}
        link ={val.link}
      /> )  
  })}
</>

)
}

export default App;