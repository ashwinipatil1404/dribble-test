import React from 'react';
import './SidebarLink.scss';

const SidebarLink = (props) =>{
    // const scrolllink = props.Link.toLowercase();
    return(
    <li className="side-link">
        <a href={`#${props.Link.toString().toLowerCase()}`}>
            {props.Link}
        </a>        
    </li>
    )
}

export default SidebarLink 