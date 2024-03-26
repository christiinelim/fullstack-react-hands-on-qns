import React, {useState} from 'react'

export default function Numbers(){

    const [allNumbers, setAllNumbers] = useState([1,3,5,7,14,15])

    function removeAtRandom(){
        let indexToRemove = Math.floor(Math.random() * allNumbers.length);
        const filter = allNumbers.filter((n) => allNumbers.indexOf(n) != indexToRemove);
        setAllNumbers(filter);
    }

    return <React.Fragment>
      <ul>
        {allNumbers.map(number=> <li> {number} </li>)}
      </ul>
      <div>
         <button onClick={removeAtRandom}>Remove Random</button>
      </div>     
    </React.Fragment>

}
