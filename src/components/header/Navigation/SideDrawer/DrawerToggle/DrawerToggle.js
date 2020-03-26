import React from 'react';
import './DrawerToggle.scss'

const  DrawerToggle = (props) =>(
    <button className=" navbar-toggler" onClick={props.clicked}>
        <span></span>
        <span></span>
        <span></span>
    </button>
)

export default DrawerToggle