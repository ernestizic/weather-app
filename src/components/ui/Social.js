import React from 'react';
//import {Link} from 'react-router-dom'


const Social = () => {

    return ( 
        <div className="social-icons">
            <div className="icon-bar">
                <a href="facebook.com" className="facebook"><i className="fa fa-facebook"></i></a> 
                <a href="twitter.com" className="twitter"><i className="fa fa-twitter"></i></a> 
                <a href="reddit.com" className="reddit"><i className="fa fa-reddit-alien"></i></a> 
                <a href="pininterest.com" className="pininterest"><i className="fa fa-pinterest"></i></a> 
                <a href="linkedin.com" className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>
            <span className="toggle-icons"><i className="fa fa-caret-right"></i></span>
        </div>
        
     ); 
}



export default Social;