import Card from 'react-bootstrap/Card';

function PageCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subheader}</Card.Subtitle>
        <Card.Text>
          {body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PageCard;