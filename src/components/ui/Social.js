import React from 'react';
import {Link} from 'react-router-dom'


const Social = () => {

    return ( 
        <div className="social-icons">
            <div className="icon-bar">
                <Link href="#" className="facebook"><i className="fa fa-facebook"></i></Link> 
                <Link href="#" className="twitter"><i className="fa fa-twitter"></i></Link> 
                <Link href="#" className="reddit"><i className="fa fa-reddit-alien"></i></Link> 
                <Link href="#" className="pininterest"><i className="fa fa-pinterest"></i></Link> 
                <Link href="#" className="linkedin"><i className="fa fa-linkedin"></i></Link>
            </div>
            <span className="toggle-icons"><i className="fa fa-caret-right"></i></span>
        </div>
        
     ); 
}



export default Social;