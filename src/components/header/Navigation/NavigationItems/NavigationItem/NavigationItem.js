import React from 'react';
import './NavigationItem.scss';

const NavigationItem = (props) =>(
    <li className={`top-menu {props.active ? "active" : null}`}>
        <a className="nav-link"
            href="#"
        >{props.children}</a>
        
    </li>
)

export default NavigationItem