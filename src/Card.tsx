import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";

interface CardProps {
  name: string;
  position: string;
  img: string;
  bio: string;
}

export const ProfileCard: React.FC<CardProps> = ({
  name,
  position,
  img,
  bio,
}) => {
  return (
    <>
      <Card className="profile-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{position}</Card.Text>
          <Button variant="primary">Open Bio</Button>
        </Card.Body>
      </Card>
    </>
  );
};
