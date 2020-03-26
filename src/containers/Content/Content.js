import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products';
import RelatedProduct from '../Products/ProductSections/RelatedProduct';

const Content = () =>(
    <div className="container-fluid">
        <div className="row">
            <Sidebar/>
            <Products/>
        </div>
        <RelatedProduct />
    </div>

)

export default Content