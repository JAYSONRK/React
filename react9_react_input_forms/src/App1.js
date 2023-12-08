import React, {useState} from 'react';

const App1 = () => {
  const [fullName, setFullName] = useState(
    {
      fname: "",
      lname: "",
    }
  );
  const onSubmits = (sub) => {
    sub.preventDefault();
  }

  const inputEvent = (event) => {
    const val = event.target.value;
    const name = event.target.name;

    setFullName ((prev) => {
      if (name === 'fname')  {
        return {
        fname: val,
        lname: prev.lname,
      }
      } else if (name === 'lname') {
        return {
       fname: prev.fname,
       lname: val,
      }
      }
    })
    
  }
 
    return (
        <>
          <h1>Hello {fullName.fname} {fullName.lname}</h1>
          <form onSubmit={onSubmits}>
            <input type="text" placeholder="first name" name="fname" onChange = {inputEvent} value={fullName.fname}/>
            <input type="text" placeholder="last name" name="lname" onChange = {inputEvent} value={fullName.lname}/>
            <button >Click Me</button>
          </form>
        </>
    )
}

export default App1;

