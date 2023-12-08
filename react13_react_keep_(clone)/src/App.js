import React, {useEffect, useState} from "react";
import Header from "./Header";
import Createnote from "./Createnote";
import Note from "./Note";
import Footer from "./Footer";

const App = (note) => {
  const [addItem, setAddItem] =  useState([]);
  const [localNotes, setLocalNotes] = useState(null);

  useEffect(() => setLocalNotes(JSON.parse(localStorage.getItem('localNote'))), [])

  const addNote = (note) => {
    setAddItem((prev) => {
     return [...prev,
             note ]
    })
    const localNote = [];
    localStorage.setItem('localNote',JSON.stringify(addItem));
    console.log(localNote);
 }

 const deleteNote = (id) => {
  setAddItem((prev) => {
    return prev.filter((val, index) => {
      return index !== id;
    })
  })
 }
 
 
  return (
    <>
      <Header/>
      <Createnote
        passNote={addNote}
      />
    
      <div className="notearea">
        {addItem.map((val, index) => {
          return <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={deleteNote}
          />
        })}
        {localNotes && localNotes.map((val, index) => {
          return <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={deleteNote}
          />
        })}
      </div>
      <Footer/>
    </>
  );
}

export default App;
