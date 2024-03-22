import { useState } from 'react';

const Dice = () => {

    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        setNumber(Math.floor(Math.random() * 6 + 1));
    }

    return (
        <div>
            <div>{number}</div>
            <div><button onClick={changeNumber}>change</button></div>
        </div>
    )
}

export default Dice;