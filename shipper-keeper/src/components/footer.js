import * as React from 'react';
import "./footer.module.css";
import {textCenter} from "./footer.module.css";

const Footer = () => {
    return (
        <div className="clearfix">
            <footer>
                <h3 className={textCenter}>ShipperKeeper.com</h3>
                <p className={textCenter}>© Shipper Keeper.com.  All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
