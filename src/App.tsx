import './App.css'
import {Container} from "react-bootstrap";
import {Footer} from "./components/Footer.tsx";
import {Home} from "./components/Home.tsx";

function App() {

  return (
    <Container>
      <Home></Home>
      <Footer></Footer>
    </Container>
  )
}

export default App
