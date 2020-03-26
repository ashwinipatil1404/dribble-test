import React from 'react';
import './Breadcrumb.scss';

const Breadcrumb = (props) =>(
    <div className="container-fluid d-none d-lg-block">
        <ul className="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a>Catlog</a></li>
            <li><a>Sofa</a></li>
            <li>Beige nudie sofa</li>
        </ul>
    </div>
)

export default Breadcrumb
