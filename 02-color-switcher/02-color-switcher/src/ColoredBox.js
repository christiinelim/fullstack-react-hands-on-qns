import React, {useState} from 'react'

function ColoredBox() {

    const [color, setColor] = useState(1);

    const getColor = () => {
        if (color === 1) {
            return 'red';
        }
        if (color === 2) {
            return 'blue';
        }
        if (color === 3) {
            return 'green';
        }
    }

    const setRed = () => {
        setColor(1);
    }

    const setGreen = () => {
        setColor(3);
    }

    const setBlue = () => {
        setColor(2);
    }

    return <React.Fragment>
        <div style={{
            border:'1px black solid',
            width:'50px',
            height:'50px',
            backgroundColor: getColor()
        }}>
        </div>

        <button onClick={setRed}>Red</button>
        <button onClick={setGreen}>Green</button>
        <button onClick={setBlue}>Blue</button>
    </React.Fragment>
  
}

export default ColoredBox;