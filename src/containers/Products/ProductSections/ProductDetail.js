import React from 'react';
import RatingStar from '../../../assets/images/star.png';
import Sofa from '../../../assets/images/sofa.jpg';

function ProductDetail(props) {
    return (
        <section id="details">
            <div className="section-box">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-img">
                            <img src={Sofa} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="product-title">{props.item.title}</h2>
                        <div className="rating">
                            <span><img src={RatingStar} /></span>
                            <span><img src={RatingStar} /></span>
                            <span><img src={RatingStar} /></span>
                            <span><img src={RatingStar} /></span>
                            <span>({props.item.rating_count})</span>
                        </div>

                        <ul className="price">
                            <li className="og_price">${props.item.price}</li>
                            <li className="offer-price">${props.item.disc}</li>
                        </ul>
                        <ul className="feature-box">
                            <li>Assembly: <span>Carpenter Assembly</span></li>
                            <li>Warranty: <span>12 Month's Warrant</span></li>
                        </ul>
                        <div className="policy-box">
                            <ul className="policy-list">
                                <li><div className="icons"><span><img src={RatingStar} /></span></div><div className="pol-text">Same day dispatch</div></li>
                                <li><div className="icons"><span><img src={RatingStar} /></span></div><div className="pol-text">easy 30-day return policy</div></li>
                            </ul>
                        </div>
                        <div className="cartbtn">
                            <div className="cartbtn-group">
                                <button type="button" className="control-btn"> - </button>
                                <input type="text" value="1" disabled />
                                <button type="button" className="control-btn"> + </button>
                                <button type="button" className="cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail