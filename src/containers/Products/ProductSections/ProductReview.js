import React from 'react';
import Profilepic from '../../../assets/images/profile.jpg';
import RatingStar from '../../../assets/images/star.png';

function ProductReview(){

    return (
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
    )

}

export default ProductReview