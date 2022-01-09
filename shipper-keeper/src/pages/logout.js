import { navigate } from "gatsby";
import * as React from "react";
import { logout } from "../firebase/LoginAuth";

export default class LogoutPage extends React.Component {

    render() {
        logout();
        navigate("/");
        return (
            <div>
                <h1>Logout Page</h1>
            </div>
        );
    }
}