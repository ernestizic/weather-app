import React from 'react';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="text-center p-3" style={{background: "rbga(0,0,0,0.2)"}}>
                &copy; React frontend practice app using itbook.store api (api.itbook.store) <span style={{float: 'right'}}>By Ernestizic {(new Date().getFullYear())} </span>
            </div>

        </footer>
     );
}
 
export default Footer;