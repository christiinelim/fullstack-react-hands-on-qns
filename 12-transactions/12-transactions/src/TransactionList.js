import React, {useState} from 'react';

export default function TransactionList() {
  
    const [transactions, setTransactions] = useState(
        [
            {
                'id': 1201,
                'name':'TCZ 121Z',
                'type':'debit',
                'amount':1723
            },
            {
                'id': 1203, 
                'name':'AARON WREN',
                'type':'credit',
                'amount':500
            },
            {
                'id': 1207, 
                'name':'THOMSON FAMILY CLINIC',
                'type':'debit',
                'amount':60
            },
            {
                'id': 1211, 
                'name':'F&J TRADING',
                'type':'debit',
                'amount':120.5
            }
        ]
    )

    return <React.Fragment>
        <ul>
            {
                transactions.map((t) => {
                    return <li>{t.name} <span style={{"color": t.type === "credit" ? "green" : "red"}}>{t.amount}</span></li>
                })
            }
        </ul>

    </React.Fragment>
  
}