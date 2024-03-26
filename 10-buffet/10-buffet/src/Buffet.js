import React, {useState} from 'react'

export default function Buffet() {

    const [items, setItems] = useState([]);

    const calculateTotal = () => {
      const priceList = {
        "beef": 12.00,
        "chicken": 7.50,
        "fish": 10.00,
        "mushrooms": 5.50,
        "spinach": 2.50
      }
      let price = 0;

      items.forEach((item) => {
        price += priceList[item]
      })

      return price;
    }

    const handleOrderChange = (event) => {
      if (items.includes(event.target.value)){
        const filter = items.filter(item => item != event.target.value);
        setItems(filter);
      } else {
        const modifiedItems = [...items, event.target.value];
        setItems(modifiedItems);
      }
    }

    return (
      <React.Fragment>
          <div>
            <input type="checkbox" name="orders" value="beef" onChange={handleOrderChange} checked={items.includes("beef")}/><label>Shabu Shabu Beef</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="chicken" onChange={handleOrderChange} checked={items.includes("chicken")}/><label>Chicken Fillet</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="fish" onChange={handleOrderChange} checked={items.includes("fish")}/><label>Fish Fillet</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="mushrooms" onChange={handleOrderChange} checked={items.includes("mushrooms")}/><label>Assorted mushhrooms</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="spinach" onChange={handleOrderChange} checked={items.includes("spinach")}/><label>Spinach</label>
          </div>
          <h1>Total:{calculateTotal()}</h1>
      </React.Fragment>
    )
}
  
