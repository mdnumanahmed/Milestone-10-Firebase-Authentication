import React, { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const [error, setError] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const loggedUser = result.user 
      console.log(loggedUser);
    })
    .catch(error => {
      setError(error.message);
    })

  }
  return (
    <Container className="mx-auto w-25">
        <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Group className="mb-3">            
          <Form.Text className="text-secondary">
            Don't Have an Account? <Link to='/register'>Register</Link>
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">            
          <Form.Text className="text-success">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">            
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
