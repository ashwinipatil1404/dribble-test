import React from 'react';
import './Sidebar.scss';
import SidebarLink from './SidebarLink/SidebarLink';
import SocialLink from './SidebarLink/SocialLink/SocialLink';

const Sidebar = (props) => (
    <div class="col-sm-3" id="sticky-sidebar">
        <aside className="fixedsidebar">
            <ul>
                <SidebarLink Link="Detail">Detail</SidebarLink>
                <SidebarLink Link="Description">Description</SidebarLink>
                <SidebarLink Link="Review">Reviews</SidebarLink>
                <SidebarLink Link="Custom">Custom</SidebarLink>
            </ul>
        </aside>
        <SocialLink />
    </div>

)

export default Sidebar