import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const Createnote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setNote((prev) => {
            return {...prev,
                     [name]: value,}
         })
    }

    const inputSubmit = () => {
        props.passNote(note);
        setNote((prev) => {
            return {
                title: "",
                content: "",
            }
         })
    }

    return (<>
        <div className="cardA bg-light">
            <input className="bg-light" name="title" type="text" placeholder="Title" onChange={inputEvent} value={note.title}/>
            <textarea className="bg-light" name="content" placeholder="write a note.." rows="3" cols="29" onChange={inputEvent} value={note.content}/>
            <button type="submit" className="buttonA" onClick={inputSubmit}><AddIcon className="addicon"/></button>
        </div>    
    </>)
}

export default Createnote;