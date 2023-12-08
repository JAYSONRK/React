import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Questions = (prop) => {
    const [hide, show] =useState(false)

    const showData = () => {
        show(!hide);
    }
    return (<>
            <div className="main-heading">
                <div className='question'>
                    <h3>{prop.question}</h3>
                    <i onClick={showData}>{hide ? <RemoveCircleOutlineIcon/> : <AddCircleOutlineIcon/>}</i>
                </div>
                {hide && <div className='answer'>
                    <p>{prop.answer}</p>
                </div>}    
            </div>
    </>)
}

export default Questions;