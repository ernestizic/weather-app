import React from 'react';
import { Link } from 'react-router-dom';


const AboutPage = () => {
    return ( 
        <React.Fragment>
            <div className="container-fluid" id="welcome-div">
                <h2 style={{color: '#030d44', paddingLeft: '40px'}}> <Link className="links" to="/"> Home </Link> / About</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Image here</p>
                    </div>
                    <div className="col-md-6">
                        <p>Text here</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
     );
}
 
export default AboutPage;