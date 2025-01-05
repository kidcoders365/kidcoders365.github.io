import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Card";
import "./App.css";
import { ProfileCard } from "./Card";

const App = () => {
  return (
    <>
      <Container>
        <Row className="container">
          <ProfileCard
            name="Oren"
            position="President"
            img="https://kidcoders365.com/images/IMG_3658.png"
            bio=""
          ></ProfileCard>
          <ProfileCard
            name="Oren"
            position="President"
            img="https://kidcoders365.com/images/IMG_3658.png"
            bio=""
          ></ProfileCard>
          <ProfileCard
            name="Oren"
            position="President"
            img="https://kidcoders365.com/images/IMG_3658.png"
            bio=""
          ></ProfileCard>
        </Row>
        <Row className="container">
          <ProfileCard
            name="Oren"
            position="President"
            img="https://kidcoders365.com/images/IMG_3658.png"
            bio=""
          ></ProfileCard>
          <ProfileCard
            name="Oren"
            position="President"
            img="https://kidcoders365.com/images/IMG_3658.png"
            bio=""
          ></ProfileCard>
        </Row>
      </Container>
    </>
  );
};

export default App;
