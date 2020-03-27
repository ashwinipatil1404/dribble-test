import React from 'react';
import styles from './SidebarLink.module.scss';

const SidebarLink = (props) =>{
    const scrolllink = props.Link.toString().toLowerCase();
    const isActive = window.location.hash === `#` + scrolllink;
    console.log(`#` + scrolllink);
    return(
    <li className={`${styles["side-link"]} ${isActive ? "active" : 'null'}`}>
        <a href={`#${scrolllink}`}>
            {props.Link}
        </a>        
    </li>
    )
}

export default SidebarLink 