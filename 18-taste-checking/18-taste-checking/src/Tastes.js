import React, {useState} from 'react'

export default function Tastes () {

    const [selectedTastes, setSelectedTastes] = useState([]);

    const toggleSpicy = () => {
      if (selectedTastes.includes("spicy")) {
        const modified = selectedTastes.filter(t => t != "spicy");
        setSelectedTastes(modified);
      } else {
        const modified = [...selectedTastes, "spicy"]
        setSelectedTastes(modified);
      }
    }

    const toggleSour = () => {
      if (selectedTastes.includes("sour")) {
        const modified = selectedTastes.filter(t => t != "sour");
        setSelectedTastes(modified);
      } else {
        const modified = [...selectedTastes, "sour"];
        setSelectedTastes(modified);
      }
    }

    const toggleSweet = () => {
      if (selectedTastes.includes("sweet")) {
        const modified = selectedTastes.filter(t => t != "sweet");
        setSelectedTastes(modified);
      } else {
        const modified = [...selectedTastes, "sweet"];
        setSelectedTastes(modified);
      }
    }

    return <React.Fragment>
      <input type="checkbox" value='spicy' checked={selectedTastes.includes("spicy")}/><label>Spicy</label>
      <input type="checkbox" value='sour' checked={selectedTastes.includes("sour")}/><label>Sour</label>
      <input type="checkbox" value="sweet" checked={selectedTastes.includes("sweet")}/><label>Sweet</label>

      <div>
        <button onClick={toggleSpicy}>Toggle Spicy</button>
        <button onClick={toggleSour}>Toggle Sour</button>
        <button onClick={toggleSweet}>Toggle Sweet</button>
      </div>
    </React.Fragment>
}


