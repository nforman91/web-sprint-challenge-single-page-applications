import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from './Home'
import Form from './Form'
import Pizza from './Pizza'

import schema from './Schema'
import * as yup from 'yup'

// INITIAL STATES
const initialFormValues = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    tomatoes: false,
    peppers: false,
  }

const initialFormErrors = {
    name: '',
    size: '',
}

const App = () => {

  // STATES
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  
  // EVENT HANDLERS
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'sausage', 'tomatoes', 'peppers'].filter(topping => !!formValues[topping])
    }
  }

  return (
    <>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizza" id="order-pizza">Form</Link>
        </li>
      </nav>

      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Switch>
          <Route path="/pizza/order">
            <Pizza id="pizza-order" />
          </Route>
          <Route path="/pizza">
            <Form 
              id="pizza-form"
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              errors={formErrors}
            />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
      </Switch>
    </>
  );
};

export default App;
