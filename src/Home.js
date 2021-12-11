import {Container, Dropdown,Input, Button, Checkbox,Table, Accordion } from "semantic-ui-react";
const Home=()=>{
const options=[
        { key: 1, text: 'idk', value: 1 },
        { key: 2, text: 'idk', value: 2 },
        { key: 3, text: 'idk', value: 3 },
]
    return(
        <div className="kade">
            <Container fluid>
                <div className="dropdowns">
                <Button.Group className="kade2" color="purple">
                    <Button>Filter by project</Button>
                    <Dropdown
                          className='button icon'
                          floating
                          options={options}
                          trigger={<></>}
                    />
                    <Button>Filter by rating</Button>
                    <Dropdown
                          className='button icon'
                          floating
                          options={options}
                          trigger={<></>}
                    />
                    <Button>Filter by time</Button>
                    <Dropdown
                          className='button icon'
                          floating
                          options={options}
                          trigger={<></>}
                    />
                </Button.Group>
                <Checkbox className="verified" label="verified"></Checkbox>
                <Checkbox className="pending" label="pending"></Checkbox>
                <Input className="searchbar"
          icon={{ name: 'search', circular: true, link: true }}
         placeholder='Search for project'
          />
                </div>
                <div className="table">
                    <Table striped selectable style={{width:900, height:500}}>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Polkadot
                          <p>lorem ipsum dolor</p>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Kusama
                <p>lorem ipsum dolor </p>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Kusama
                <p>lorem ipsum dolor </p>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Polkadot
                <p>lorem ipsum dolor </p>

                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Akala
                <p>lorem ipsum dolor </p>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Chocolate
                <p>lorem ipsum dolor </p>
                </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        </div>
  </Container>
        </div>
    );
}
export default Home;