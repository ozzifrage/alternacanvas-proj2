import Card from 'react-bootstrap/Card';

function PageCard({header, subheader, body, subtype}) {

  return (
    <Card bg={subtype === 'module' ? 'dark' : 'light'} text={subtype === 'module' ? 'white' : 'dark'}>
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtype === 'module' ? '' : subheader}</Card.Subtitle>
        <Card.Text>
          {subtype === 'module' ? '' : body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PageCard;