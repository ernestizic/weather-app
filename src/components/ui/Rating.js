import React from 'react';
import Norate from '../../img/star0.png';
import Rate from '../../img/star0.png';

const Rating = () => {
    return ( 
        <ul className="rate">
            <li><img src={Norate} alt="rating"/></li>
            <li><img src={Norate} alt="rating"/></li>
            <li><img src={Norate} alt="rating"/></li>
            <li><img src={Norate} alt="rating"/></li>
            <li><img src={Norate} alt="rating"/></li>

            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </ul>
     ); 
}



export default Rating;