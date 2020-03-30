import React from 'react';
import styles from './SidebarLink.module.scss';

function SidebarLink(props){

    const scrolllink = props.Link.toString().toLowerCase();
    const activeClass = props.isActive ? "active" : "";

    return (
        <li to={props.Link} className={`${styles["side-link"]} ${activeClass}`} >
            <a href={`#${scrolllink}`} onClick={props.menuClick}>
                {props.Link}
            </a>
        </li>
    )
}

export default SidebarLink