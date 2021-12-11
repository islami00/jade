import { Card, Container, Image, Button, Icon } from "semantic-ui-react";
const Sidebar=()=>{
    return(
        <Container fluid>
            <div className="sidbr">
        <Card color="violet" fluid className="sidbr" style={{width:300, height:550,}}>
            <Card.Content>
            <Image src='/images/avatar/large/matthew.png ' size='medium' circular />
                <Card.Header>Alice</Card.Header>
                <Card.Meta>joined august</Card.Meta>
                <Button color="purple" style={{width:200}}>Verified</Button>
                <div className="sidbr2">
                <Card style={{width:250 , height:300}}>
                    <Card.Content>
                        <p className="reviews">No.Reviews</p>
                        <p className="total">total{}</p>
                        <p className="staking">Staking</p>
                        <p className="points">points</p>
                    </Card.Content>
                </Card>
                </div>
                <Button color="purple" style={{width:200}}>Follow</Button>
            </Card.Content>
            <Card.Content>
            <Icon name="mail" size="big"/>
                <Icon name="twitter square" size="big" />
                <Icon name="discord" size="big"/>
            </Card.Content>
        </Card>
      </div>
        </Container>
    );
}
export default Sidebar;
