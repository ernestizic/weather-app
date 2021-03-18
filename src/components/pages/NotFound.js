import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div style={{textAlign: 'center'}}>
            <h2 style={{padding: '11%'}}>Page Not Found!</h2>
            <Link to="/">Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;