import { Button, Container, Form, FormCheck, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Info = () => {
  return(
    <Container>
      <h1>Information</h1>
      <p>Lots of valuable data here</p>
      <Link to='/' id="back">Back</Link> <br/>
      <Link to='/' title="index via title" aria-labelledby="label-span">Back</Link> <br/>
      <Link to='/' aria-labelledby="label-span">Back</Link> <br/>
      <h3>Don't do that at home!</h3>
      <p>Is that interesting?</p>
      <Form action="/">
        <FormCheck checked={true}></FormCheck>
        <FormControl defaultValue='Верно'></FormControl>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>Текст на русском</p>
      <Link to='/'>Ссылочка</Link>
      <Link to='/login'>Sign in!</Link>
      <div>Kill & Destroy</div>
      <div style={{display: "none"}} className="hidden">
        Invisible text
      </div>

      <div id="grab-multiple">
        <a id="first-link">First</a>
        <a id="second-link">Second</a>
        <a id="third-link">Third</a>
      </div>

      <div id="new-tab">
        <a href="/login" target="_blank">New tab</a>
      </div>

      <div id="grab-css">
       <span className="span" style={{height: '12px'}}>Fisrt </span>
       <span className="span">Second </span>
       </div>
        <div className="issue2928"
             style={{width: '100px', height: '40px', visibility: 'hidden',  background: 'red'}}>visibility:hidden
        </div>
        <div className="issue2928" style={{width: '100px', height: '40px', background: 'green'}}>no visibility hidden</div>
    </Container>
  )
}