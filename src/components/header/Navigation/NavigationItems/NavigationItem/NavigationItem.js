import React from 'react';
import styles from './NavigationItem.module.scss';

const NavigationItem = (props) =>(
    <li className={`${styles.topmenu} ${props.active ? "active" : null}`}>
        <a className="nav-link"
            href="#"
        >{props.children}</a>
    </li>
    )

export default NavigationItem