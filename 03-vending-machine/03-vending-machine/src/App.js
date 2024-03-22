import React from 'react';
import { useState } from 'react';

export default function App () {
  const [displayMessage, setDisplayMessage] = useState("");

  const setMessage = (message) => {
    setDisplayMessage(message);
  }

  return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          {displayMessage}
        </div>
        <button onClick={() => setMessage("Dispensing coffee")}>Coffee</button>
        <button onClick={() => setMessage("Dispensing tea")}>Tea</button>
        <button onClick={() => setMessage("Dispensing orange juice")}>Orange Juice</button>
      </React.Fragment>
    );
  
}


