import React from 'react';
import styles from './SidebarLink.module.scss';

const SidebarLink = (props) =>{
    const scrolllink = props.Link.toString().toLowerCase();
    //const isActive = location.pathname.match(/^\/detail/) ? "active" : "";
    return(
    <li className={styles["side-link"]}>
        <a href={`#${scrolllink}`}>
            {props.Link}
        </a>        
    </li>
    )
}

export default SidebarLink 