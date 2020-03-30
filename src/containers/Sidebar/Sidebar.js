import React from 'react';
import './Sidebar.scss';
import SidebarLink from './SidebarLink/SidebarLink';
import SocialLink from './SidebarLink/SocialLink/SocialLink';

class Sidebar extends React.Component {

    constructor() {
        super()
        this.state = {
            activeMenuItem: null
        }
    }

    handleClick(menuItem) {
        this.setState({ activeMenuItem: menuItem })
    }

    render() {
        const menuItems = [
            'Details',
            'Description',
            'Review',
            'Custom'
        ];

        return (
            <div className="col-sm-3" id="sticky-sidebar">
                <aside className="fixedsidebar">
                    <ul>
                        {menuItems.map(list =>
                            <SidebarLink
                                key={list.menuItem}
                                isActive={this.state.activeMenuItem === list}
                                menuClick={this.handleClick.bind(this, list)}
                                Link={list}>Details</SidebarLink>
                        )}
                    </ul>
                </aside>
                <SocialLink />
            </div>
        )
    }
}


export default Sidebar