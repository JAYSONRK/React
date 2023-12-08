import React from 'react';


function Card(prop)  {
    return (<>
            <div className='card'>
            <img src={prop.imgsrc} alt="ref"/>
             <div className='detail'>
               <h5>{prop.title}</h5>
               <h3>{prop.sname}</h3>
               <a href={prop.link}><button>WATCH NOW</button></a>
             </div>
           </div> 
        </>
    )
}

export default Card;