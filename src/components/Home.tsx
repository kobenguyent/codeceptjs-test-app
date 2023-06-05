import {Container} from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Home = () => {
  return(
    <Container>
      <h1>Welcome to test app!</h1>
      <Link to='info'>More info</Link><br/>
      <Link to='form/file'>Test Link</Link><br/>
      <Link to='form/hidden'>Test</Link><br/>
      <Link to='info'>Document-Relative Link</Link><br/>
      <Link to='spinner'>Spinner</Link><br/>
      <p>A wise man said: "debug!"</p>
    </Container>
  )
}