import React, { useState, useEffect } from "react";
// import { useRouteMatch } from 'react-router';
import { Route, Link, Switch } from "react-router-dom";

import Home from './Home';
import Form from './Form';
import Pizza from './Pizza';

import schema from './Schema';
import * as yup from 'yup';
import axios from 'axios';

// INITIAL STATES
const initialFormValues = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    tomatoes: false,
    peppers: false,
    special: '',
  }

const initialFormErrors = {
    name: '',
    size: '',
    special: '',
}

const initialPizzas = []
const initialDisabled = true

const App = () => {
  // const { path, url } = useRouteMatch();

  // STATES
  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  
  // HELPERS
  // const getPizzas = () => {
  //   axios.get('https://reqres.in/api/orders')
  //     .then(res => {
  //       setPizzas(res.data.data)
  //     }).catch(err => console.error(err))
  // }

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      setPizzas([res.data, ...pizzas])
    }).catch(err => console.err(err))
  }


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
    postNewPizza(newPizza)
  } 


  // SIDE EFFECTS
  // useEffect(() => {
  //   getPizzas()
  // }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <>
      <header>
        <h1>Lambda Eats</h1>

        <nav className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pizza" id="order-pizza">Order</Link>
          </li>
        </nav>
      </header>


      <Switch>
          <Route path="/pizza/order">
            {
              pizzas.map(pizza => {
                return(
                  <Pizza id="pizza-order" key={pizza.id} details={pizza} />
                )
              })
              
            }
            
          </Route>
          <Route path="/pizza">
            <Form
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              errors={formErrors}
              disabled={disabled}
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
