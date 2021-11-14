import * as React from 'react';
import { Link } from 'gatsby';
import "./navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {aboutButton, logo} from "./navbar.module.css";
import icon from "../images/icon.png";

const Navbar = (props) => {
    const pageTitle = props.pageTitle;
    return (
        <div>
            <title>{pageTitle}</title>
            <header>
                <ul>
                    <li><img className={logo} src={icon} alt="ShipperKeeper"/></li>
                    <li><Link to="/">Home</Link></li>
                    <li className={aboutButton}><a href="mailto:contactshipperkeeper@gmail.com">Contact Us</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar