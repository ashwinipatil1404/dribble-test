import React from 'react';
import Sofa from '../../../assets/images/sofa.jpg';

function ProductDescription(){

    return (
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
    )

}

export default ProductDescription