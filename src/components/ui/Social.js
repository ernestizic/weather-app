import React from 'react';
import {Link} from 'react-router-dom'


const Social = () => {
    return ( 
        <div class="icon-bar">
            <Link href="#" className="facebook"><i className="fa fa-facebook"></i></Link> 
            <Link href="#" className="twitter"><i className="fa fa-twitter"></i></Link> 
            <Link href="#" className="reddit"><i className="fa fa-reddit-alien"></i></Link> 
            <Link href="#" className="pininterest"><i className="fa fa-pinterest"></i></Link> 
            <Link href="#" className="linkedin"><i className="fa fa-linkedin"></i></Link>
        </div>
     ); 
}



export default Social;