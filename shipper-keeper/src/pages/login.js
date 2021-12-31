import * as React from "react";
import { Form, Button } from "react-bootstrap";
import Nav from '../components/navbar';
import Footer from '../components/footer';
import { loginForm } from '../styles/login.css';
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

        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        login(this.state.username, this.state.password);
    }
    render() {

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        return (
            <main>
                <Nav pageTitle="Login"></Nav>
                <body>
                    <p>&nbsp;</p>
                    <Form className="loginForm" onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="loginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                value={this.state.username}
                                onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                value={this.state.password}
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