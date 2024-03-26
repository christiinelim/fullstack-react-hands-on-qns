import React, {useState} from 'react'

export default function Numbers () {
  
    const [allNumbers, setAllNumbers] = useState([1,3,5,7]);
    const [userNumber, setUserNumber] = useState(0);
  

    const addRandom = ()=> {
        let randomNumber = Math.floor(Math.random() * 10 + 1)
        const modified = [...allNumbers, randomNumber];
        setAllNumbers(modified);
    }

    const addNumber = () => {
        
    }

    const handleNewNumber = (e) => {
        setUserNumber(e.target.value);
    }

    const handleAddUserNumber = () => {
        const modified = [...allNumbers, userNumber];
        setAllNumbers(modified);
    }


    return <React.Fragment>
        <ul>
            {allNumbers? allNumbers.map(number=><li>{number}</li>) 
                        : <p>Loading...</p>}
        </ul>
        <div>
            <button onClick={addRandom}>Add Random</button>
        </div>
        <div>
            <input type="text" name="newNumber" value={userNumber} onChange={handleNewNumber}/>
            <button onClick={handleAddUserNumber}>Add</button>
        </div>
    </React.Fragment>

}