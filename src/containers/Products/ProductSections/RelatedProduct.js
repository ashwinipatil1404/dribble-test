import React from 'react';
import Product2 from '../../../assets/images/product2.png';

function RelatedProduct() {

    return (
        <section id="related">
            <h2 className="product-title">Related Products</h2>
            <div className="d-flex related-product">
                <div className="flex-fill">
                    <div className="rel-product-img">
                        <img src={Product2} />
                    </div>
                    <h3 className="prod-name">Product1</h3>
                    <ul className="price">
                        <li className="og_price">$149</li>
                        <li className="offer-price">$120</li>
                    </ul>
                </div>
                <div className="flex-fill">
                    <div className="rel-product-img">
                        <img src={Product2} />
                    </div>
                    <h3 className="prod-name">Product2</h3>
                    <ul className="price">
                        <li className="og_price">$149</li>
                        <li className="offer-price">$120</li>
                    </ul>
                </div>
                <div className="flex-fill">
                    <div className="rel-product-img">
                        <img src={Product2} />
                    </div>
                    <h3 className="prod-name">Product3</h3>
                    <ul className="price">
                        <li className="og_price">$149</li>
                        <li className="offer-price">$120</li>
                    </ul>
                </div>
                <div className="flex-fill">
                    <div className="rel-product-img">
                        <img src={Product2} />
                    </div>
                    <h3 className="prod-name">Product4</h3>
                    <ul className="price">
                        <li className="og_price">$149</li>
                        <li className="offer-price">$120</li>
                    </ul>
                </div>
                <div className="flex-fill">
                    <div className="rel-product-img">
                        <img src={Product2} />
                    </div>
                    <h3 className="prod-name">Product5</h3>
                    <ul className="price">
                        <li className="og_price">$149</li>
                        <li className="offer-price">$120</li>
                    </ul>
                </div>
                <div className="flex-fill">
                    <div className="rel-product-img">
                        <img src={Product2} />
                    </div>
                    <h3 className="prod-name">Product6</h3>
                    <ul className="price">
                        <li className="og_price">$149</li>
                        <li className="offer-price">$120</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RelatedProduct