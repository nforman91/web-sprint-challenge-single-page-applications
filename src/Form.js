import React from 'react'

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
        <form id="pizza-form" className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Pizza</h2>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.special}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>Order Information</h4>


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

                <h4>Click to Order</h4>
                <button id='order-button' disabled={disabled}>Add to Order</button>

            </div>
        </form>
    )
}