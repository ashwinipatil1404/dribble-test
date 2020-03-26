import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products';

const Content = () =>(
    <div className="container-fluid">
        <div className="row">
            <Sidebar/>
            <Products/>
        </div>
    </div>
)

export default Content