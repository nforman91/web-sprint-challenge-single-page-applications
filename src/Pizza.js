import React from 'react'

export default function Pizza ({details}) {
    if(!details){
        return <h3>Working on fetching your pizza order...</h3>
    }

    return(
        <div className='pizza-container'>
            <p>Name: {details.name}</p>
            <p>Size: {details.size}</p>
            {/* <p>Toppings: {details.toppings}</p> */}
            <p>Special Instructions: {details.special}</p>
        </div>
    )
}