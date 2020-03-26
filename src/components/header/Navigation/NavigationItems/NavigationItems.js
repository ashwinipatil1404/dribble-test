import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) =>{

    let addClasses = ['']
    if(props.menuMobile){
        addClasses = ['show']
    }

    return(
        <div className={`collapse navbar-collapse ${props.rightAlign ? "justify-content-end" : null} ${addClasses}`} id="navbarSupportedContent">
            <ul className="nav navbar-nav">
                <NavigationItem link="" >Bedroom</NavigationItem>
                <NavigationItem link="" active>Living Room</NavigationItem>
                <NavigationItem link="">Office</NavigationItem>
                <NavigationItem link="">Kitchen</NavigationItem>
                <NavigationItem link="">Bathroom</NavigationItem>
            </ul>
        </div>
    )

} 

export default NavigationItems