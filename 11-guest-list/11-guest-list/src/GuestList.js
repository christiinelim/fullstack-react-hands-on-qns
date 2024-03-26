import React, {useState} from 'react'

export default function GuestList() {

    const [guests, setGuests] = useState(
        [
            'Tony Stark',
            'Hawkeye',
            'Spider Man',
            'Bruce Wayne'
        ]
    )

    return (
        <React.Fragment>
            <ul>
                {
                    guests.map(g => {
                        return <li>{g}</li>
                    })
                }
            </ul>
        </React.Fragment>
    )
}