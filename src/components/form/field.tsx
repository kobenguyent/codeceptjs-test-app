import { Container, Form } from 'react-bootstrap';

export const FormField = () => {
  return(
    <Container>
      <Form action="/form/simple">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value="OLD_VALUE"/>
        <input type="text" id="email" name="email" style={{display: "none;"}}/>
        <input type="submit" value="Submit"/>
      </Form>

      <form style={{width: '100px', height: '40px', visibility: 'hidden', background: 'red'}} action="/form/simple" method="POST">
        <input type="text" id="noid" name="noname" value="RANDOM_VALUE" />
      </form>
    </Container>
    )
}