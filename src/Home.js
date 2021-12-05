import { Card, Container, Dropdown,Input, Button, Checkbox } from "semantic-ui-react";
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
                <Button.Group className="kade2" color="violet">
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
              <Card.Group>
    <Card fluid color='violet' header='Polkadot' />
    <Card fluid color='violet' header='Kusama' />
    <Card fluid color='violet' header='Kusama' />
    <Card fluid color='violet' header='Acala' />
    <Card fluid color='violet' header='Astar' />
    <Card fluid color='violet' header='Phala' />
    <Card fluid color='violet' header='Kusama' />
  </Card.Group>
  </Container>
        </div>
    );
}
export default Home;