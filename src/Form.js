import React from 'react'
import pizzaImg from './Assets/Pizza.jpg'

export default function Form(props){
    const{
        values, 
        submit, 
        change, 
        errors,
        disabled,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return(
        <>
        <img src={pizzaImg} alt="Picture of a pizza" />
        <form id="pizza-form" className='form-container' onSubmit={onSubmit}>
                <h2>Add a Pizza</h2>
                <h4>Order Information</h4>
            <div className='forminputs'>


                {/* TEXT INPUT */}
                <h4>Name:</h4>
                <label>
                    <input
                        id="name-input"
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                    <div className='errors'>{errors.name}</div>

                {/* DROPDOWN */}
                <h4>Size:</h4>
                <label>
                    <select
                        id="size-dropdown"
                        value={values.size}
                        onChange={onChange}
                        name='size'
                    >
                        <option value=''>--Select a size--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                    <div className='errors'>{errors.size}</div>

                {/* CHECKBOXES */}
                <h4>Toppings:</h4>
                <label>Pepperoni
                    <input
                        onChange={onChange}
                        name='pepperoni'
                        type='checkbox'
                        checked={values.pepperoni}
                    />
                </label>
                <label>Sausage
                    <input
                        onChange={onChange}
                        name='sausage'
                        type='checkbox'
                        checked={values.sausage}
                    />
                </label>
                <label>Tomatoes
                    <input
                        onChange={onChange}
                        name='tomatoes'
                        type='checkbox'
                        checked={values.tomatoes}
                    />
                </label>
                <label>Peppers
                    <input
                        onChange={onChange}
                        name='peppers'
                        type='checkbox'
                        checked={values.peppers}
                    />
                </label>
                    <div className='errors'>{errors.toppings}</div>

                {/* TEXT INPUT */}
                <h4>Special Instructions:</h4>
                <label>
                    <input
                        id="special-text"
                        value={values.special}
                        onChange={onChange}
                        name='special'
                        type='text'
                    />
                </label>
                    <div className='errors'>{errors.special}</div>
            </div>

            <h4>Click to Order</h4>
            <button id='order-button' disabled={disabled}>Add to Order</button>
        </form>
        </>
    )
}