import React,{useState} from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, stime] = useState(time);
  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    return stime(time);
  },1000)
  return (
    <>
      <div className="card">
        <h1>{ctime}</h1>
      </div>
    </>
  )
}

export default App;
