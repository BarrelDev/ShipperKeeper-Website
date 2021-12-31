import * as React from 'react';
import { Link } from 'gatsby';
import "./navbar.module.css";
import '../../styles/styles.css';
import {rightButton, logo, navContainer,uheader, clearfix } from "./navbar.module.css";
import {navBar, navItem} from "./navbar.module.css";
import icon from "../../images/icon.png";

const Navbar = (props) => {
    const pageTitle = props.pageTitle;
    return (
        <div>
            <title>{pageTitle}</title>
            <header className={[clearfix,uheader]}>
                <ul className={[navContainer, navBar]}>
                    <li><img className={logo} src={icon} alt="ShipperKeeper"/></li>
                    <li className={navItem}><Link to="/">Home</Link></li>
                    <li className={[rightButton, navItem]}><a href="mailto:contactshipperkeeper@gmail.com">Contact Us</a></li>
                    <li className={[rightButton, navItem]}><Link to="/login">Login</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar
