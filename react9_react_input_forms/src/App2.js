import React, {useState} from 'react';

const App2 = () => {
  const [fullName, setFullName] = useState(
    {
      fname: "",
      lname: "",
      email: "",
      phone: "",
    }
  );
  const onSubmits = (sub) => {
    sub.preventDefault();
  }

  const inputEvent = (event) => {
    // const val = event.target.value;
    // const name = event.target.name;
    const {value, name} = event.target;

    setFullName ((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
    
  }
 
    return (
        <>
          <h1>Hello {fullName.fname} {fullName.lname}</h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <form onSubmit={onSubmits}>
            <input type="text" placeholder="first name" name="fname" onChange = {inputEvent} value={fullName.fname}/>
            <input type="text" placeholder="last name" name="lname" onChange = {inputEvent} value={fullName.lname}/>
            <input type="email" placeholder="email" name="email" onChange = {inputEvent} value={fullName.email}/>
            <input type="number" placeholder="phone" name="phone" onChange = {inputEvent} value={fullName.phone}/>
            <button >Click Me</button>
          </form>
        </>
    )
}

export default App2;
