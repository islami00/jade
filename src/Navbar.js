import { Container, Button} from "semantic-ui-react";

const Navbar= () =>{
    return(
        <Container fluid>
                    <div className="navbar">
            <h1>Chocolate</h1>
            <nav className="links">
                <Button> About</Button>
                <Button>Team</Button>
                <Button color="violet">Projects</Button>
                <Button>CHOC token</Button>
            </nav>
        </div>
        </Container>
    );
}
export default Navbar;