import 'semantic-ui-css/semantic.min.css'
import Navbar from "./Navbar";
import Home from "./Home";
import { Container} from "semantic-ui-react";
import Sidebar from './Sidebar';
function App() {
  return (
    <Container fluid>
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <Home/>
      </div>
        <Sidebar/>
    </div>
      </Container>
  );
}

export default App;
