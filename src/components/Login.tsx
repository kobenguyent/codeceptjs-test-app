import { Button, Container, Form } from 'react-bootstrap';

export const Login = () => {
  return(
    <Container>
      <Form id='user_form_login' action="/login">
        <Form.Group className="mb-3" controlId="email-wrapper">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id='email-label'/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password-wrapper">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" id='password-label'/>
        </Form.Group>

        <fieldset id="fieldset-buttons">
          <div id="submit-wrapper" className="form-wrapper">
            <div id="submit-label" className="form-label"></div>
            <div id="submit-element" className="form-element">
              <Button name="submit" id="submit" type="submit">Sign In</Button>
            </div>
          </div>
          <div id="remember-wrapper" className="form-wrapper">
            <div className="form-label" id="remember-label"></div>
            <div id="remember-element" className="form-element">
              <input type="hidden" name="remember" value=""/>
              <input type="checkbox" name="remember" id="remember" value="1"/>
              <label htmlFor="remember" className="optional">Remember Me</label>
            </div>
          </div>
        </fieldset>
      </Form>
    </Container>
  )
}