import React, {useState} from 'react';

const App4 = () => {
    const [curInput, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    const [initailData, afterData] = useState("");

    const getData = (event) => {
        const {value, name} = event.target;
        setInput((prev) => {
           return  {
                ...prev,
                [name]: value,
            }
        })
    }

    const setData = (event) => {
        event.preventDefault();
        afterData(curInput)
    }

    return(<>
        <h1>Hello {initailData.fname} {initailData.lname}</h1>
        <p>{initailData.email}</p>
        <p>{initailData.phone}</p>
        <form onSubmit={setData}>
            <input type="text" name="fname"  placeholder="first name" value={curInput.fname} onChange={getData}/>
            <input type="text" name="lname"  placeholder="last name" value={curInput.lname} onChange={getData}/>
            <input type="email" name="email"  placeholder="email" value={curInput.email} onChange={getData}/>
            <input type="phone" name="phone"  placeholder="phone" value={curInput.phone} onChange={getData}/>
            <button type="submit">Click</button>
        </form>
    </>)
}

export default App4;