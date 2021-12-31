import * as React from "react";
import { Form, Button } from "react-bootstrap";
import Nav from '../components/navbar';
import Footer from '../components/footer';
import '../styles/login.css';
import { login } from '../firebase/LoginAuth';


export default class AuthPage extends React.Component {
    state = {
        username: "soumya80@gmail.com",
        password: "4Testing",
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log("target::: ",target);
        // console.log(`change event is triggered ! => ${name} => ${value}`);

        this.setState({
            [name]: value
        });
        console.log("updated state == ", this.state);
    }
    handleSubmit = (event) => {
        
        login(this.state.username, this.state.password);
        event.preventDefault();
    }
    render() {
        return (
            <main>
                <Nav pageTitle="Login"></Nav>
                <body>
                    <p>&nbsp;</p>
                    <Form className="loginForm" onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="loginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="username"
                                onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"
                                onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </body>
                <Footer></Footer>
            </main>
        );
    }
}