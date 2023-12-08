import React from "react";
import {sum, sub, mult, div} from './Calc' ;

function App() {
  return (<>
    <ol>
      <li>{sum(6,5)}</li>
      <li>{sub(6,5)}</li>
      <li>{mult(6,5)}</li>
      <li>{div(6,5)}</li>
    </ol>
  </>
  )
}

export default App;