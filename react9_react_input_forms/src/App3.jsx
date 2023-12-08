import React, {useState} from 'react';

const App3 = () => {
    const [initailEvent, setEvent] = useState("");
    const [initialValue, submitedValue] = useState(initailEvent);
    
    const eventChange = (event) => {
        setEvent(event.target.value);
    }
    const evetStart = (event) => {
        event.preventDefault();
        submitedValue(initailEvent);
        // console.log(initialValue);
        if (initialValue == 10) {
            console.log('hi')
        }
    }
    
    return (<>
        <h2>Hello {initialValue}</h2>
        <form onSubmit={evetStart}>
           <input type="text" name="fname" placeholder="first name" value={initailEvent} onChange={eventChange}/>
           <button type="submit">Send</button>
        </form>
    </>)
}

export default App3;