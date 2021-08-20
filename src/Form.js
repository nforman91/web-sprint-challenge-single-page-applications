import React from 'react'

export default function Form(props){
    const{
        values, 
        submit, 
        change, 
        errors
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
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Pizza</h2>

                <button id='order-button'>Add to Order</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.special}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>


                {/* TEXT INPUT */}
                <h4>Header Name:</h4>
                <label>Label Name:
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>


                {/* DROPDOWN */}
                <h4>Header Size:</h4>
                <label>Label Size:
                    <select
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
                        value='small'
                        onChange={onChange}
                        name='size'
                        type='radio'
                        checked={values.size === 'small'}
                    />
                </label>
            </div>
        </form>
    )
}