import React from 'react';
import './ProductSection.scss';
import RatingStar from '../../../assets/images/star.png';
import Sofa from '../../../assets/images/sofa.jpg';
import Product1 from '../../../assets/images/product.png';
import Product2 from '../../../assets/images/product2.png';
import Profilepic from '../../../assets/images/profile.jpg';

const ProductSection = () => (
    <>
        <section id="details">
            <div className="section-box">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-img">
                            <img src={Sofa} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="product-title">Sofa for 3</h2>
                        <div className="rating">
                            <span><img src={RatingStar} /></span>
                            <span><img src={RatingStar} /></span>
                            <span><img src={RatingStar} /></span>
                            <span><img src={RatingStar} /></span>
                        </div>

                        <ul className="price">
                            <li className="og_price">$149</li>
                            <li className="offer-price">$120</li>
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
                                <input type="text" disabled />
                                <button type="button" className="control-btn"> + </button>
                                <button type="button" className="cart-btn">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="description">
            <div className="row">
                <div className="col-lg-6 col-lg-push-6">
                    <div className="product-img">
                        <img className="img-fluid" src={Sofa} />
                    </div>
                </div>
                <div className="col-lg-6 col-lg-pull-6">
                    <h2 className="product-title mb-3">What is Lorem Ipsum?</h2>
                    <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </section>
        <section id="reviews">
            <h2 className="product-title">23 Reviews for Sofa</h2>
            <div className="review-container">
                <div className="row review-box">
                    <div className="col-sm-3">
                        <div className="review-profile">
                            <img className="review-pic rounded-circle" src={Profilepic}></img>
                            <div className="review-detail">
                                <p className="review-name">Johnatan Doe</p>
                                <time dateTime="">August 26, 2020</time>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="review-head">
                            <h3 className="review-title">Excellent</h3>
                            <div className="rating">
                                <span><img src={RatingStar} /></span>
                                <span><img src={RatingStar} /></span>
                                <span><img src={RatingStar} /></span>
                                <span><img src={RatingStar} /></span>
                            </div>
                        </div>
                        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="row review-box">
                    <div className="col-sm-3">
                        <div className="review-profile">
                            <img className="review-pic rounded-circle" src={Profilepic}></img>
                            <div className="review-detail">
                                <p className="review-name">Johnatan Doe</p>
                                <time dateTime="">August 26, 2020</time>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="review-head">
                            <h3 className="review-title">Excellent</h3>
                            <div className="rating">
                                <span><img src={RatingStar} /></span>
                                <span><img src={RatingStar} /></span>
                                <span><img src={RatingStar} /></span>
                                <span><img src={RatingStar} /></span>
                            </div>
                        </div>
                        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="load-more">
                    <a href="#" className="text-center ">Load More (21)</a>
                </div>                
            </div>
        </section>
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
    </>)

export default ProductSection