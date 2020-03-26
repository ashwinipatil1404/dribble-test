import React from 'react';
import './ProductSection.scss';
import Products from './Product';
import ProductDetail from './ProductDetail';
import ProductDescription from './ProductDescription';
import ProductReview from './ProductReview';

const ProductSection = (props) => {
    const Productdata = Products.map(item => <ProductDetail key={item.id} item={item} />)
    return(
        <>
            {Productdata}
            <ProductDescription />
            <ProductReview />
            
        </>
    )
    
}

export default ProductSection