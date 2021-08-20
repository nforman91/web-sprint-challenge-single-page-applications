import React from 'react'
import pizzaImg from './Assets/Pizza.jpg'

export default function Home() {
    return (
        <div>
            <h1>Pizza for Coding</h1>
            <img src={pizzaImg} alt="Picture of a pizza"/>
        </div>
    )
}