import * as React from 'react';
import "./footer.module.css";
import {textCenter} from "./footer.module.css";

const Footer = () => {
    return (
        <div>
            <footer>
                <p className={textCenter}>ShipperKeeper</p>
            </footer>
        </div>
    )
}

export default Footer