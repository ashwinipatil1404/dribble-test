import React from 'react';
import HeaderMenu from '../../components/header/HeaderMenu';
import Breadcrumb from '../../components/BreadCrumb/BreadCrumb';
import Content from '../Content/Content';


const Layout = () =>(
    <div>
        <HeaderMenu />
        <Breadcrumb />
        <Content />
    </div>
)

export default Layout