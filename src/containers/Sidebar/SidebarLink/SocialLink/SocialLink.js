import React from 'react';
import './SocialLink.scss';
import Fb  from '../../../../assets/images/facebook.png';
import Twitter from '../../../../assets/images/twitter.png';
import Pintrest from '../../../../assets/images/pinterest.png'

const SocialLink = () =>(
    <ul className="Sociallink d-none d-lg-block">
        <li className="fb"><a href="#"><img src={Fb} /></a></li>
        <li className="twitter"><a href="#"><img src={Twitter} /></a></li>
        <li className="pintrest"><a href="#"><img src={Pintrest} /></a></li>
    </ul>
)

export default SocialLink