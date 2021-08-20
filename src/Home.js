import React from 'react'
import pizzaImg from './Assets/Pizza.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="homepizza">
            <h1>Pizza for Coding!</h1>
            <img src={pizzaImg} alt="Picture of a pizza"/>
            <button>
                <Link to="/pizza" id="order-pizza">Order</Link>
            </button>
        </div>
    )
}