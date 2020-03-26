import React from 'react';
import Logo from '../Logo/Logo';
import './HeaderMenu.scss';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import DrawerToggle from './Navigation/SideDrawer/DrawerToggle/DrawerToggle';

class HeaderMenu extends React.Component{

    constructor(){
        super()
        this.state = {
            showMobileMenu:false
        }
    }
   

    toggleHandler = () =>{
        this.setState((prevState) => {
            return {
                showMobileMenu: !prevState.showMobileMenu
            }           
        });       
    }
    
    render(){
        return(
            <>
                <header>
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md">               
                            <a className="navbar-brand" href="#"><Logo /></a>
                            <DrawerToggle clicked={this.toggleHandler} />
                            <NavigationItems rightAlign menuMobile={this.state.showMobileMenu} />
                        </nav>
                    </div>
                </header>
            </>
        )
    }
}

export default HeaderMenu;